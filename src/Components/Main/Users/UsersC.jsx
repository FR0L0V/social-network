import React from 'react';
import classes from './Users.module.css';
import User from './User/User';
import * as axios from 'axios';
import Preloader from './../../OptionalComponents/Preloader';
import preloader from './../../../Assets/images/preloader.gif';
import Paginator from './../../OptionalComponents/Paginator/Paginator';


/*
let Users = (props) => {
	
	
	/*componentDidMount(){
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPage}`).then(response=>{
			this.props.setUsers(response.data.items);
			this.props.setUsersTotalCount(response.data.totalCount);
		});
	}
	
	let  usersElement=(users)=>{
		let a = [];
		a = users.map(u => {
			return <User user={u} follow={props.follow} unfollow = {props.unfollow} toggleFollowingProgress = {props.toggleFollowingProgress} isFollowingInProgress = {props.isFollowingInProgress} followUser = {props.followUser} unfollowUser = {props.unfollowUser}/>
		})
		return a;
	}
	
	
	
		let pagesCount = Math.ceil(props.usersTotalCount/props.usersOnPage);
		let pages = [];
		for(let i = 1; i<=pagesCount;i++){
			pages.push(i);
		}
	return <div className={classes.users}>
	
		{props.isFetching ? <Preloader /> :(
			<div className={classes.pages}>
				{pages.map(a=>{
					return <span className={(props.currentPage === a)? classes.currentPage :""} onClick = {()=>props.onPageChange(a)} >| {a} |</span>
				})
				}
			</div>
			)}
			{usersElement(props.users)}
		
			<button onClick = {()=>props.setUsers(props.users)}>SET USERS</button>
		</div>
	
}

*/

class Users extends React.Component{
	
	state={
		
	}
	
	/*componentDidUpdate(prevProps, prevState){
		if(prevProps.currentPage !== this.props.currentPage){
			this.setState({
				currentPage:this.props.currentPage
			})
		}
	}
	*/
	
	usersElement=(users)=>{
		let a = [];
		a = users.map(u => {
			return <User user={u} follow={this.props.follow} unfollow = {this.props.unfollow} toggleFollowingProgress = {this.props.toggleFollowingProgress} isFollowingInProgress = {this.props.isFollowingInProgress} followUser = {this.props.followUser} unfollowUser = {this.props.unfollowUser}/>
		})
		return a;
	}
	
	
	render=()=>{
		
		return <div className={classes.users}>
			{this.props.isFetching ? <Preloader /> :''}
			<div>
			{/*<Paginator usersTotalCount={this.props.usersTotalCount} usersOnPage={this.props.usersOnPage} currentPage={this.props.currentPage} onPageChange={this.props.onPageChange} />*/}
				<Paginator totalElementsCount={this.props.usersTotalCount} pageSize={this.props.usersOnPage} pagesInPortion={10} currentPage={this.props.currentPage} onPageChange={this.props.onPageChange} />
				{this.usersElement(this.props.users)}
			</div>
			
			
			<button onClick = {()=>this.props.setUsers(this.props.users)}>SET USERS</button>
		</div>
	}
}


export default Users;