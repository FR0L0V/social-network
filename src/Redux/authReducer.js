import {headerAPI} from './../api/api';
import {stopSubmit} from 'redux-form';


let defaultState = {
	id:null,
	login:null,
	email:null,
	isAuth:false,
	isFetching:false,
	captcha:null,
}

let authReducer = (state = defaultState, action)=>{
	switch(action.type){ 
		
		case 'SET_USER_DATA'://{type:"SET_USER_DATA", data:object}
			return{
				...state,
				...action.data,
				isAuth:action.isAuth,
				captcha:null,
			}
			
		case 'TOGGLE_IS_FETCHING'://{type:"SET_CURRENT_PAGE", value:number}
			return{
				...state,
				isFetching:action.isFetching,
				
			}
		
		case 'SHOW_CAPTCHA':
			return{
				...state,
				captcha:action.captcha,
			}
		
		default:
		return  state;
	}
}

export default authReducer;

export let setUserData = (data, isAuth = true) =>{
	return{
		type:'SET_USER_DATA',
		data: data,
		isAuth: isAuth,
	}
}

export let toggleIsFetching= (isFetching) =>{
	return{
		type:'TOGGLE_IS_FETCHING',
		isFetching:isFetching,
	}
}

export let showCpatcha = (captchaURL)=>{
	return{
		type:'SHOW_CAPTCHA',
		captcha:captchaURL,
	}
}

export let getUserDataThunkCreator = (isAuth=true) => (dispatch) =>{
	    return headerAPI.getUserData().then(data=>{
			if(data.resultCode===0){
				dispatch(setUserData(data.data, isAuth));
			}
		})
}

export let loginThunkCreator = (email, password, rememberMe =  false, captcha = null) => (dispatch) =>{

	headerAPI.login(email, password, rememberMe, captcha).then(data=>{
			if(data.resultCode===0){
				dispatch(getUserDataThunkCreator(true));
			}else if(data.resultCode===10){
				dispatch(stopSubmit('login', {_error:data.messages[0]}))
				dispatch(getCaptcha())
			}else if (data.resultCode===1){
				dispatch(stopSubmit('login', {_error:data.messages[0]}))
			}
		})
}

export let logoutThunkCreator = () => (dispatch) =>{
	headerAPI.logout().then(data=>{
			if(data.resultCode===0){
				dispatch(setUserData(null, false));
			}
		})
}

export let getCaptcha = (value=true) => (dispatch) => {
		if(!value){
			dispatch(showCpatcha(null));
		}else{
			headerAPI.getCaptcha().then(data=>{
				dispatch(showCpatcha(data.url));
			})
		}
	
}
