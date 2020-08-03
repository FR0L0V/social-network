let defaultState = {
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
};

const dialogPageReducer = (state=defaultState, action) =>{
	
	switch(action.type){
		case "NEW_MESSAGE": //{type:"NEW_MESSAGE", messageText:string}
			let message = {
				id:state.messages.length+1,
				text:action.messageText,
			}
			let stateCopyForNewMessage = {
				...state,
				messages:[...state.messages, message],
				};
			return stateCopyForNewMessage;
		
		case "UPDATE_MESSAGE_TEXT":  //{type:"UPDATE_MESSAGE_TEXT" value=string}
			let stateCopyForUpdateMessageText = {
				...state, 
				newMessageText:action.value,
				};
			return stateCopyForUpdateMessageText;
			
		default:
			return state;
	}
	
}

export default dialogPageReducer;

export const updateMessageTextActionCreator = (value) => {
	return({type:"UPDATE_MESSAGE_TEXT", value:value});
};

export const newMessageActionCreator = (text) =>{
	return{type:"NEW_MESSAGE", messageText:text}
};