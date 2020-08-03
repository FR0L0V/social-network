import React from 'react';


export let ProfileData = (props) =>{
	return <div>
			{props.isOwner && <button onClick = {props.activateEditMode}>Edit</button>}
			<div>
				<b>Full name: </b> {props.profile.fullName}
			</div>
			<div>
				<b>About me: </b> {props.profile.aboutMe}
			</div>
			<div>
				<b>Looking for a job: </b> {props.profile.lookingForAJob?'yes':'no'}
			</div>
			{props.profile.lookingForAJob && (<div><b>Job description: </b> {props.profile.lookingForAJobDescription} </div>)}	
			<div>
				<b>Contacts: </b> {(props.profile.contacts)?(Object.keys(props.profile.contacts)).map(key=>{return <Contacts key={key} contactsType={key} contactsData={props.profile.contacts[key]} />} ) :''}
			</div>
		</div>
}

let Contacts = ({contactsType, contactsData}) =>{
	return <div>
		<b>{contactsType}: </b> {contactsData || '---'}
	</div>
}