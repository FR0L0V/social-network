import {connect} from 'react-redux';
import UsersC from './UsersC';
import {follow, unfollow, setUsers, setUsersTotalCount, setCurrentPage, toggleIsFetching, toggleFollowingProgress, getUsersThunkCreator, followUserThunkCreator, unfollowUserThunkCreator} from './../../../Redux/usersPageReducer';
import React from 'react';
import * as axios from 'axios';
import {getUsers, getUsersOnPage, getUsersTotalCount, getCurrentPage, getIsFetching, getIsFollowingInProgress} from './../../../Redux/usersPage-selector'



class UsersAPIComponent extends React.Component {
	
	componentDidMount = () =>{
		/*toggleIsFetching(true);
		getUsers(this.props.currentPage,this.props.usersOnPage).then(data=>{
			this.props.toggleIsFetching(false);
			this.props.setUsers(data.items);
			this.props.setUsersTotalCount(data.totalCount);
		});*/
		this.props.getUsersThunkCreator(this.props.currentPage,this.props.usersOnPage);
	}
	
	onPageChange = (pageNumber) =>{
		this.props.setCurrentPage(pageNumber);
		/*this.props.toggleIsFetching(true);
		getUsers(this.props.currentPage,this.props.usersOnPage).then(data=>{
			this.props.toggleIsFetching(false);
			this.props.setUsers(data.items);
		});*/
		let getUsers1=()=>{
			this.props.getUsersThunkCreator(this.props.currentPage,this.props.usersOnPage);
		}
		getUsers1 = getUsers1.bind(this)
		setTimeout(getUsers1, 1000);
	}
	
	render = () => {
		return <UsersC onPageChange = {this.onPageChange}  users = {this.props.users} usersTotalCount = {this.props.usersTotalCount} usersOnPage = {this.props.usersOnPage} currentPage = {this.props.currentPage} follow = {this.props.follow} unfollow = {this.props.unfollow}  setUsers = {this.props.setUsers}  setCurrentPage = {this.props.setCurrentPage} isFetching = {this.props.isFetching} isFollowingInProgress={this.props.isFollowingInProgress} toggleFollowingProgress={this.props.toggleFollowingProgress} followUser = {this.props.followUserThunkCreator} unfollowUser = {this.props.unfollowUserThunkCreator} />
	}
}


let mapStateToProps = (state) =>{
	return{
		users:getUsers(state),
		usersOnPage:getUsersOnPage(state),
		usersTotalCount:getUsersTotalCount(state),
		currentPage:getCurrentPage(state),
		isFetching:getIsFetching(state),
		isFollowingInProgress:getIsFollowingInProgress(state),
	}
}

/*let mapDispatchToProps = (dispatch) =>{
	return{
		follow:(id)=>{
			dispatch(follow(id));
		},
		unfollow:(id)=>{
			dispatch(unfollow(id));
		}, 
		setUsers:(users)=>{
			dispatch(setUsers(users));
		},
		setUsersTotalCount:(value)=>{
			dispatch(setUsersTotalCount(value));
		},
		setCurrentPage:(value)=>{
			dispatch(setCurrentPage(value));
		},
		toggleIsFetching:(isFetching)=>{
			dispatch(toggleIsFetching(isFetching));
		}
	}
}
*/


let UsersContainer = connect(mapStateToProps, {
		follow,
		unfollow, 
		setUsers,
		setUsersTotalCount,
		setCurrentPage,
		toggleIsFetching,
		toggleFollowingProgress,
		getUsersThunkCreator,
		followUserThunkCreator,
		unfollowUserThunkCreator,
	})(UsersAPIComponent);
export default UsersContainer;