import React, {useEffect, useState} from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from './../../../OptionalComponents/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatusWithSetState';
import userPhoto from './../../../../Assets/images/user2.png'
import {ProfileData} from './ProfileData/ProfileData';
import {ProfileDataForm} from './ProfileDataForm/ProfileDataForm';


let ProfileInfo=(props)=>{

	let onAvatarChange = (event)=>{
			 if(event.target.files.length){
				 props.savePhoto(event.target.files[0]);
			 }
	}
	
	let [editMode, setEditMode] = useState(false);
		
	let activateEditMode = () =>{
		setEditMode(true);
	}		
		
	let deactivateEditMode = () =>{
		setEditMode(false);
	}		
		
	return(	
		
		<div className={classes.profileInfo}>
				<div className={classes.profile}>
					<div className={classes.avatar}>
						{(!props.profile.photos)?<Preloader />:<img src={props.profile.photos.large || userPhoto} alt="pic"/>}
							{props.isOwner && <input onChange={onAvatarChange} type="file" vlaue="choose file"/>}
					</div>
					<div>
						<b>Status: </b> {(!props.status)?<p>...Loading...</p>:<ProfileStatus status = {props.status} updateUserStatus = {props.updateUserStatus}/>}
					</div>
					{!editMode ? <ProfileData isOwner={props.isOwner} activateEditMode= {activateEditMode} profile={props.profile} /> : <ProfileDataForm saveProfileInfo = {props.saveProfileInfo} profile={props.profile} deactivateEditMode={deactivateEditMode}/>}
				</div>
			</div>
	)
}





export default ProfileInfo;