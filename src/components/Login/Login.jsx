import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import { login } from "../../redux/authReducer"
import { Redirect } from 'react-router-dom';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Email'} name={'email'} component={Input} autoComplete="off" validate={required}/>
      </div>
      <div>
        <Field placeholder={"Password"} name={'password'} component={Input} autoComplete="off" validate={required} type={"password"}/>
      </div>
      <div>
        <Field component={Input} name={'rememberMe'} type={"checkbox"}/> remember me
      </div>
      <button>Login</button>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if(props.isAuth) {
    return <Redirect to={"/profile"} />
  }

  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login);