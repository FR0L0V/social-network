import React from 'react';
import  Dialogs from './Dialogs';
import {updateMessageTextActionCreator, newMessageActionCreator} from './../../../Redux/dialogPageReducer.js';
//import StoreContext from './../../../StoreContext';
import {connect} from 'react-redux';
import {withAuthRedirect} from './../../../HOC/withAuthRedirect';
import {compose} from 'redux';


/*
let DialogsContainer = (props) =>{
	
	
	return(
		<StoreContext.Consumer>{
		(store)=>{
		
		let updateMessageText = (value) => {
			store.dispatch(updateMessageTextActionCreator(value));
		}
	
		let sendMessage = (value) =>{
			store.dispatch(newMessageActionCreator(value));
			updateMessageText("");
		}
		
			return <Dialogs newMessageText = {store.getState().dialogPage.newMessageText} dialogs = {store.getState().dialogPage.dialogs} messages = {store.getState().dialogPage.messages} updateMessageText = {updateMessageText} newMessage = {sendMessage}/>
		}
		}
		</StoreContext.Consumer>
		
	)
}
*/




let mapStateToProps = (state) =>{
	return{
		newMessageText : state.dialogPage.newMessageText,
		dialogs: state.dialogPage.dialogs,
		messages: state.dialogPage.messages,
	}
}

let mapDispatchToProps = (dispatch) =>{
	return{
		updateMessageText:(value)=>{
			dispatch(updateMessageTextActionCreator(value));
		},
		newMessage:(value)=>{
			dispatch(newMessageActionCreator(value));
		}
	}	
}

export default compose(withAuthRedirect,connect(mapStateToProps, mapDispatchToProps))(Dialogs)
