import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { createField, Input } from '../common/FormsControls/FormsControls';
import { login } from "../../redux/authReducer"
import { Redirect } from 'react-router-dom';
import style from "../common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field placeholder={'Email'} name={'email'} component={Input} autoComplete="off" validate={required}/>
      </div>
      <div>
        <Field placeholder={"Password"} name={'password'} component={Input} autoComplete="off" validate={required} type={"password"}/>
      </div>
      <div>
        <Field component={Input} name={'rememberMe'} type={"checkbox"}/> remember me
      </div>

      {captchaUrl && <img src={captchaUrl} alt={"captcha"}/>}
      {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {}) }

      { error && <div className={style.formSummaryError}> {error} </div>}
      <button>Login</button> 
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if(props.isAuth) {
    return <Redirect to={"/profile"} />
  }

  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
  </div>
}

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login);