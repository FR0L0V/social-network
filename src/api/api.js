import  * as axios from 'axios';

let instance = axios.create({
baseURL:'https://social-network.samuraijs.com/api/1.0/',
withCredentials:true,
headers:{
	'API-KEY':'4b630712-4167-4357-a059-9386551b1200',
},
})

export let usersAPI={
	getUsers(currentPage, usersOnPage){
		return instance.get(`users?page=${currentPage}&count=${usersOnPage}`).then(response=>{return response.data});
	},

	followUser(userId){
		return instance.post(`follow/${userId}`).then(response=>{return response.data});
	},

	unfollowUser(userId){
		return instance.delete(`follow/${userId}`).then(response=>{return response.data});
	},
}

export let headerAPI={
	getUserData(){
		return instance.get(`auth/me`).then(response=>{return response.data});
	},
	
	login(email, password, rememberMe, captcha){
		return instance.post(`auth/login`, {email, password, rememberMe, captcha}).then(response=>{return response.data});
	},
	
	logout(){
		return instance.delete(`auth/login`).then(response=>{return response.data});
	},
	
	getCaptcha(){
		return instance.get('security/get-captcha-url').then(response => {return response.data});
	}
}



export let profileAPI = {
	getProfileInfo(profileId){
		return instance.get(`profile/${profileId}`).then(response=>{return response.data});
	},
	
	getUserStatus(userId){
		return instance.get(`profile/status/${userId}`).then(response=>{return response.data});
	},
	
	updateUserStatus(status){
		return instance.put(`profile/status`,{status:status}).then(response=>{return response.data});
	},
	savePhoto(file){
		let formData = new FormData();
		formData.append('image', file);
		return instance.put(`profile/photo`, formData, {
		headers:{
			'Content-Type':'multipart/form-data'
		}}).then(response=>{return response.data});
	},
	
	saveProfileInfo(profile){
		return instance.put(`profile`, profile).then(response=>{return response.data});
	}
}