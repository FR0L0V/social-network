import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {FormElementCreator} from './../../../../OptionalComponents/FormControls/Textarea'


export let ProfileDataForm = (props) =>{
	
let onSubmit=(formData)=>{
		//props.deactivateEditMode();
		props.saveProfileInfo(formData, props.profile.userId).then(()=>{props.deactivateEditMode()});
	}
	
	return <div>
		<ProfileDataReduxForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile}/>
	</div>
}

let ProfileDataFormBase = (props)=>{
	
	return(
	<form onSubmit={props.handleSubmit}>
		{props.error ? <div>{props.error}</div>:''}
			<button >Save</button>
			<div>
				<b>Full name: </b> <Field name='fullName' component={FormElementCreator} types='input' type='text' placeholder='Full Name' />
			</div>
			<div>
				<b>About me: </b> <Field name='aboutMe' component={FormElementCreator} types='input' type='text' placeholder='About me' />
			</div>
			<div>
				<b>Looking for a job: </b> <Field name='lookingForAJob' component={FormElementCreator} types='input' type='checkbox'/>
			</div>
			<div>
				<b>Job description: </b> <Field name='lookingForAJobDescription' component={FormElementCreator} types='input' type='text' placeholder='Job description'/>
			</div>
			<div>
				<b>Contacts: </b> {(props.profile.contacts)?(Object.keys(props.profile.contacts)).map(key=>{return <ContactsForm contactsType={key} contactsData={props.profile.contacts[key]} />} ) :''}
			</div>
	</form>
	)
}

let ProfileDataReduxForm = reduxForm({form:'profileData'})(ProfileDataFormBase);

let ContactsForm = ({contactsType, contactsData}) =>{
	return <div>
		<b>{contactsType}: </b> <Field name={'contacts.'+contactsType} component={FormElementCreator} placeholder={contactsData || ''} types='input' type='text' />
	</div>
}