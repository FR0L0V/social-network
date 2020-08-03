import React from 'react';
import classes from './Dialog.module.css';
import {NavLink} from 'react-router-dom';

let Dialog = (props) =>{
	return(
		<div className={classes.friend}>
			<div className = {classes.friendPhoto}>
				<img src={props.photo} alt="" />
			</div>
			<NavLink to ={"/dialogs/" + props.id}>{props.name}</NavLink>
		</div>
	)
}

export default Dialog;