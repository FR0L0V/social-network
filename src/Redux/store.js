import profilePageReducer from './profilePageReducer';
import dialogPageReducer from './dialogPageReducer';
import asideReducer from './asideReducer'


let store = {
	_state : {
		profilePage:{
			posts:[
				{id:1, text:'kjhdfgkhdf', likesCount:12},
				{id:2, text:'tevfgr', likesCount:13},
				{id:3, text:'dfgdfgdf', likesCount:0},
			],
			newPostText:"",
		},
		dialogPage:{
			dialogs:[
				{id:1, name:"Dmitry", photo:""},
				{id:2, name:"Ivan", photo:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
				{id:3, name:"Igor", photo:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
				{id:4, name:"Ekaterina", photo:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
				{id:5, name:"Anastasia", photo:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
				{id:6, name:"Evgeny", photo:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
			],
			messages:[
				{id:1, text:"Hello)"},
				{id:2, text:"How are you?"},
				{id:3, text:"blabla" },
			],
			newMessageText:"",
		},
		aside:{
			
		},
	},
	
	_renderTree(){
	},
	
	getState(){
		return this._state;
	},
	
	subscribe (observer){
		this._renderTree=observer;
	},
	
	dispatch(action){  
		this._state.dialogPage = dialogPageReducer(this._state.dialogPage, action);
		this._state.profilePage = profilePageReducer(this._state.profilePage, action);
		this._state.aside = asideReducer(this._state.aside, action);
		this._renderTree(this._state);
		
		/*if(action.type === "ADD_POST"){ //{type:"ADD_POST"}
			let newPost ={
				id:4,
				text: this._state.profilePage.newPostText,
				likesCount:0,
			};
			this._state.profilePage.posts.unshift(newPost);
			this._renderTree(this._state);
		}
		else if(action.type==="NEW_MESSAGE"){ //{type:"NEW_MESSAGE", messageText:string}
			let message = {
				id:4,
				text:action.messageText,
			}
			this._state.dialogPage.messages.push(message);
			this._renderTree(this._state);
		}
		else if(action.type==="UPDATE_POST_TEXT"){  //{type:"UPDATE_POST_TEXT", newText:string}
			
			this._state.profilePage.newPostText =  action.newText;
			this._renderTree(this._state);
		}
		else if(action.type==="UPDATE_MESSAGE_TEXT"){  //{type:"UPDATE_MESSAGE_TEXT" value=string}
			this._state.dialogPage.newMessageText = action.value;
			this._renderTree(this._state);
		}*/
		
		
	},
	
}

export default store;
