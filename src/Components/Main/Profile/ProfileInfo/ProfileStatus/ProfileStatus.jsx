import React from 'react';
import classes from './ProfileStatus.module.css';


class ProfileStatus extends React.Component{
	
	state ={
		editMode:false,
		status:this.props.status,
	}
	
	
	activateEditMode=()=>{
		this.setState({
			...this.state,
			editMode:true,
		})
		
	}
	
	deactivateEditMode=()=>{
		this.setState({
			...this.state,
			editMode:false,
		})
		this.props.updateUserStatus(this.state.status);
	}
	
	inputOnChange = (e) =>{
		this.setState({status:e.currentTarget.value});
	}
	
	componentDidUpdate(prevProps, prevState){
		if(prevProps.status !== this.props.status){
			this.setState({
				 ...this.state,
				 status:this.props.status,
			}
			)
		}
	}
	
	render(){
		return(
			<div>
				{!this.state.editMode &&
				<div onDoubleClick = {this.activateEditMode}>
					<span>{this.state.status}</span>
				</div>}
				{this.state.editMode && 
				<div onBlur = {this.deactivateEditMode}>
					<input onChange = {this.inputOnChange} autoFocus = {true} type='text' value = {this.state.status}></input>
				</div>}
			</div>
		)
	}
}

export default ProfileStatus;