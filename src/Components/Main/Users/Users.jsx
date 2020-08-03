import React from 'react';
import classes from './Users.module.css';
import User from './User/User';
import * as axios from 'axios';

let Users = (props) =>{
	let getUsers=() =>{ 
	if(props.users.length === 0){
		
		axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
			props.setUsers(response.data.items);
		});
	
	}
	}
	
	let usersElement = (users) =>{
	let a = [];
	a = users.map(u => {
	return <User user={u} follow={props.follow} unfollow = {props.unfollow} key = {u.id}/>
	})
	return a;
}
	
	
	return(
		<div className={classes.users}>
			{usersElement(props.users)}
			<button onClick = {props.setUsers}>SET USERS</button>
		</div>
	)
}

export default Users;