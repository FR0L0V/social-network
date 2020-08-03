import React from 'react';
import classes from './Textarea.module.css';


export let FormElementCreator = ({input, meta, ...props}) =>{
	let hasError = meta.touched && meta.error;
	
	let chooseElement = () =>{
		if(props.types === 'textarea'){
			return (<textarea {...input} {...props} className={hasError?(classes.error):('')}/>)
		}else if (props.types === 'input'){
			return (<input {...input} {...props} className={hasError?(classes.error):('')} type={props.type}/>)
		}
	}
	
	return(
		<div>
			{chooseElement()}
			<div>
				{hasError && <span>{meta.error}</span>}
			</div>
		</div>
	)
}
