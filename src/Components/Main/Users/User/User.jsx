import React from 'react';
import classes from './User.module.css';
import userPhoto from './../../../../Assets/images/user.png';
import {NavLink} from 'react-router-dom';
//import * as axios from 'axios';
import {usersAPI} from './../../../../api/api';


let User = (props) =>{
return (
<div className={classes.user}>
	<div className={classes.userAction}>
		<NavLink to={'/profile/'+props.user.id} className={classes.userPhoto}>
			<img src = {(props.user.photos.small===null)? userPhoto :props.user.photos.small}/>
		</NavLink>
		<div className = {classes.button}>
			{(props.user.followed === true )?<button disabled = {props.isFollowingInProgress.some(userId=>userId===props.user.id)} onClick={()=>{
					props.unfollowUser(props.user.id);
					
				
				}}>UNFOLLOW</button>:<button disabled = {props.isFollowingInProgress.some(userId=>userId===props.user.id)} onClick={()=>{
					props.followUser(props.user.id);
					
				}}>FOLLOW</button>}
		</div>
	</div>
	<div className={classes.userInfo}>
		<div className = {classes.userName}>
			{props.user.name} 
		</div>
		<div className = {classes.userStatus}>
			{props.user.status}
		</div>
	</div>
	<div className={classes.userLocation}>
		<div className={classes.userCountry}>
			{/*props.user.location.country*/}
		</div>
		<div className={classes.userCity}>
			{/*props.user.location.city*/}
		</div>
	</div>
</div>
)
}

export default User;