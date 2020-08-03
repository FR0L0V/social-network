import {headerAPI} from './../api/api';
import {stopSubmit} from 'redux-form';


let defaultState = {
	initialized:false,
}

let appReducer = (state = defaultState, action)=>{
	switch(action.type){ 
		
		case 'INITIALIZE'://{type:"SET_USER_DATA", data:object}
			return{
				...state,
				initialized:true,
			}
			
		default:
		return  state;
	}
}

export default appReducer;

export let Initialize = () =>{
	return{
		type:'INITIALIZE',
	}
}

