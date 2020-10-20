import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Login'} name={'login'} component={Input} autoComplete="off" validate={required}/>
      </div>
      <div>
        <Field placeholder={"Password"} name={'password'} component={Input} autoComplete="off" validate={required}/>
      </div>
      <div>
        <Field component={Input} name={'rememberMe'} type={"checkbox"}/> remember me
      </div>
      <button>Login</button>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

const onSubmit = (formData) => {
  console.log(formData)
}

const Login = () => {
  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}

export default Login;