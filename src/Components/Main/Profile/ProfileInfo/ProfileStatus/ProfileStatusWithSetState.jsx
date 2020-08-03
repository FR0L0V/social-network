import React, {useState, useEffect} from 'react';
import classes from './ProfileStatus.module.css';

let ProfileStatus = (props) => {
	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);
	
	useEffect(()=>{
		setStatus(props.status);
	},[props.status])
	
	let activateEditMode = () =>{
		setEditMode(true)
	}
	
	let deactivateEditMode = () =>{
		props.updateUserStatus(status);
		setEditMode(false);
	}
	
	let changeStatusValue = (event) =>{
		setStatus(event.currentTarget.value)
	}
	
	return(
		<div>
			{!editMode &&
			<div>
				<span onDoubleClick = {activateEditMode}>{props.status}</span>
			</div>}
			{editMode && 
			<div>
				<input onChange={changeStatusValue} onBlur={deactivateEditMode} autoFocus = {true} type='text' value={status}></input>
			</div>}
		</div>
	)
	
}

export default ProfileStatus;