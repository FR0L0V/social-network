import React from 'react';
import classes from './Message.module.css';



let Message=(props)=>{
	return(
		<div className={classes.message}>
			{props.text}
		</div>
	)
}

export default Message;