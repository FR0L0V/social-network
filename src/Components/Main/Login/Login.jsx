import React from 'react';
import classes from './Login.module.css';
import {reduxForm, Field} from 'redux-form';
import {FormElementCreator} from './../../OptionalComponents/FormControls/Textarea';
import {required} from './../../../Utils/Validators/Validator'
import {loginThunkCreator, getCaptcha} from './../../../Redux/authReducer'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';


let Login = (props) =>{
	let onSubmit = (formData)=>{
		props.loginThunkCreator(formData.email, formData.password, formData.rememberMe, formData.captcha)
	}
	
	if(props.isAuth){
		return(
			<Redirect to='/profile' />
		)
	}
	
	return (
		<div className = {classes.login}>
			<h1> LOGIN </h1>
			<LoginReduxForm onSubmit ={onSubmit} isAuth={props.isAuth} captcha={props.captcha} getCaptcha={props.getCaptcha} />
		</div>
	)
}

let LoginForm = (props) =>{
	return(
		<form onSubmit = {props.handleSubmit}>
			<div><Field name="email" component={FormElementCreator} types="input" type = 'email' validate={[required]}/></div>
			<div><Field name="password" component={FormElementCreator} types="input" type = 'password' validate={[required]}/></div>
			<div><Field name="isRememberMe" component={FormElementCreator} types="input" type="checkbox" />Remember me</div>
				{props.captcha && <Captcha captchaURL={props.captcha} getCaptcha={props.getCaptcha} />}
				{props.error && <div> {props.error}</div>}
			<div><button>Enter</button></div>
		</form>
	)
}

let Captcha = (props)=>{
	return(
		<div>
			<span> Anty-bot system </span>
			<div> <img src={props.captchaURL} /> <button onclick = {props.getCaptcha}>Reload Captcha</button></div>
			<div> <Field name='captcha' component={FormElementCreator} types='input' type='text' /></div>
		</div>
	)
}

let LoginReduxForm = reduxForm({
	form:'login'
})(LoginForm);

let mapStateToProps = (state) =>{
	return{
		isAuth:state.auth.isAuth,
		captcha:state.auth.captcha,
	}
}

export default connect(mapStateToProps, {loginThunkCreator, getCaptcha})(Login);