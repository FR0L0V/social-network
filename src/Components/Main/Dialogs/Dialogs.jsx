import React from 'react';
import classes from './Dialogs.module.css';
import  Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import {Redirect} from 'react-router-dom';
import {FormElementCreator} from './../../OptionalComponents/FormControls/Textarea'
import {Field, reduxForm} from 'redux-form';
import {required, maxLengthCreator} from './../../../Utils/Validators/Validator'


let Dialogs = (props) =>{
	
	let messageElements = props.messages.map(message => <Message key ={message.id} text={message.text} />);
	
	let dialogsElements = props.dialogs.map(dialog => <Dialog key = {dialog.id} name={dialog.name} id={dialog.id} photo={dialog.photo}/>);

	let newMessageElement = React.createRef();
	
	let updateMessageText = () => {
		props.updateMessageText(newMessageElement.current.value);
	}
	
	let sendMessage = (formData) =>{
		props.newMessage(formData.messageText);
		formData.messageText='';
	}
	
	
	return(
		<div className={classes.dialogWindow}>
			<div className={classes.dialogs}>
				{dialogsElements}
			</div>
			<div className={classes.messageWindow}>
				<div className = {classes.messages}>
					{messageElements}
				</div>
				<div className= {classes.newMessage}>
					<SendMessageReduxForm onSubmit={sendMessage} />
				</div>
			</div>
	</div>
	)
}

let maxLength50 = maxLengthCreator(50);

let SendMessageForm = (props) =>{
	
	return(
		<form onSubmit ={props.handleSubmit}>
			<Field component={FormElementCreator} types='textarea' name='messageText' validate={[required, maxLength50]} placeholder="type your message"/>
			<button>Send</button>
		</form>
	)
	
}

let SendMessageReduxForm = reduxForm({form:'sendMessage'})(SendMessageForm);

export default Dialogs;