import {profileAPI} from './../api/api'
import {stopSubmit} from 'redux-form';


let defaultState = {
	posts:[
		{id:3, text:'kjhdfgkhdf', likesCount:12, key:3},
		{id:2, text:'tevfgr', likesCount:13, key:2},
		{id:1, text:'dfgdfgdf', likesCount:0, key:1},
	],
	profile:{},
	status:null,
};

const profilePageReducer = (state = defaultState, action) =>{
	switch(action.type){
		case "ADD_POST": //{type:"ADD_POST"}
			let newPost ={
				id:state.posts.length+1,
				key:state.posts.length+1,
				text: action.text,
				likesCount:0,
			};
			return {
				...state, 
				posts:[newPost, ...state.posts],
				//newPostText:'',
			};
			
			
		/*case "UPDATE_POST_TEXT":  //{type:"UPDATE_POST_TEXT", newText:string}
			let stateCopyForUpdatePostText = {
				...state,
				newPostText: action.newText,
				};
			return stateCopyForUpdatePostText;
		*/
		
		case "SET_PROFILE_INFORMATION":  //{type:"UPDATE_POST_TEXT", profile:object}
			return {
				...state,
				profile:action.profile,
				};
			
		case 'SET_USER_STATUS':
			return {
				...state,
				status:action.status,
			}
		
		case 'UPDATE_USER_STATUS':
			return {
				...state,
				status:action.status,
			}
		case 'SAVE_PHOTO':
			return{
				...state,
				profile:{...state.profile, photos:action.photos}
			}
		
		default: 
			return state;
	}	
}

export default profilePageReducer

export const addPost = (value) =>{
		return { type:"ADD_POST", text:value}
};

let savePhoto = (photos) =>{
	return{type:"SAVE_PHOTO", photos:photos}
}

export let updateAvatar = (file)=>{
	console.log(1);
}
/*export const updatePostText = (text) => {
	return{type:"UPDATE_POST_TEXT", newText:text}
};
*/

export const setProfileInformation = (object) => {
	return {type:'SET_PROFILE_INFORMATION', profile:object }
}

export const getProfileInfoThunkCreator = (userId) => (dispatch) =>{
	profileAPI.getProfileInfo(userId).then(data=>{
		dispatch(setProfileInformation(data));
	});
}

export const getUserStatusThunkCreator = (userId) => async (dispatch) =>{
	let data = await profileAPI.getUserStatus(userId);
	dispatch(setUserStatus(data));
}

export const setUserStatus = (status) =>{
	return{type:'SET_USER_STATUS', status:status}
}

export const updateUserStatus = (status) =>{
	return{type:'UPDATE_USER_STATUS', status:status}
}

export const updateUserStatusThunkCreator = (status) =>async (dispatch) =>{
	let data = await profileAPI.updateUserStatus(status);
	if(data.resultCode==0){
		dispatch(updateUserStatus(status));
	}
}

export const savePhotoThunkCreator = (file) =>async (dispatch) =>{
	let data = await profileAPI.savePhoto(file);
	if(data.resultCode==0){
		savePhoto(data.data)
	}else{
		console.log('fail');
	}
}

export const saveProfileInfo = (profile,userId) =>async (dispatch) =>{
	let data = await profileAPI.saveProfileInfo(profile);
	if(data.resultCode==0){
		dispatch(getProfileInfoThunkCreator)
	}else{
		dispatch(stopSubmit('profileData', {_error:data.messages}));
		return Promise.reject(data.messages);
	}
}