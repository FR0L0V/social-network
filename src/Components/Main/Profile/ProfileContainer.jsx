import {saveProfileInfo, addPost, setProfileInformation, getProfileInfoThunkCreator, setUserStatus, getUserStatusThunkCreator, updateUserStatusThunkCreator, savePhotoThunkCreator} from './../../../Redux/profilePageReducer.js';
//import StoreContext from './../../../StoreContext';
import {connect} from 'react-redux';
//import * as axios from 'axios';
import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {withRouter} from 'react-router-dom';
import {profileAPI} from './../../../api/api';
import {Redirect} from 'react-router-dom';
import {withAuthRedirect} from './../../../HOC/withAuthRedirect';
import {compose} from 'redux';
import {Field, reduxForm} from 'redux-form';
import {required, maxLengthCreator} from './../../../Utils/Validators/Validator';
import {FormElementCreator} from './../../OptionalComponents/FormControls/Textarea';
import {getPosts, getProfile, getStatus} from './../../../Redux/profilePage-selector.js'



class ProfileAPIContainer extends React.Component{
	 
	 updatePageContent =()=>{
		 let userId = this.props.match.params.userId;
		if(!userId){
			userId = 6334;
		}
		
		this.props.getUserStatusThunkCreator(userId);
		
		this.props.getProfileInfoThunkCreator(userId);
	 }
	 
	 
	componentDidMount = () =>{
		this.updatePageContent();
	}
	
	componentDidUpdate = (prevProps, prevState) =>{
		
		if(this.props.match.params.userId!=prevProps.match.params.userId || this.props.profile!=prevProps.profile){
			this.updatePageContent();
		}
	}
	
	render=()=>{
	//let addPostElement = React.createRef();
	
	let addPost = (formData) =>{
		this.props.addPost(formData.postText);
		formData.postText='';
	}
	
	let isOwner = (!this.props.match.params.userId);
	/*let updatePostText = () =>{
		let newPost = addPostElement.current.value;
		this.props.updatePostText(newPost);
	}
	*/
	
	let savePhoto =(file)=>{
		this.props.savePhotoThunkCreator(file);
	}
	
	return  <div className={classes.profilePage}>
		
				<ProfileInfo saveProfileInfo={this.props.saveProfileInfo} savePhoto={savePhoto} isOwner =  {isOwner} profile = {this.props.profile} status = {this.props.status} updateUserStatus = {this.props.updateUserStatusThunkCreator}/>
				<div className = {classes.postsBlock}>
					<h3> My posts </h3>
					<div className = {classes.newPost}>
						{/*
						<textarea ref={addPostElement} onChange = {updatePostText} value = {this.props.newPostText}/>

						<button onClick = {addPost} type="button"> Add post</button>
						*/}
						<AddPostReduxForm newPostText={this.props.newPostText} onSubmit={addPost}/>
					</div>
					<MyPosts posts = {this.props.posts}/> 
				</div>
			</div>
	}
}

let maxLength10 = maxLengthCreator(10);

let AddPostForm = (props) =>{
	return(
		<form onSubmit = {props.handleSubmit}>
			<Field component = {FormElementCreator} types='textarea' name='postText' validate={[required, maxLength10]}/>
			<button type="submit"> Add post </button>
		</form>
	)
}

let AddPostReduxForm = reduxForm({form:'addPost'})(AddPostForm);

/*
let ProfileContainer = () => {
	
	return  (
	
		<StoreContext.Consumer>{
		(store)=>{
			let addPost = () =>{
				store.dispatch(addPostActionCreator());
				updatePostText("");
			}
			
			let updatePostText = (newPost) =>{
				store.dispatch(updatePostTextActionCreator(newPost));
			}
		
			 return <Profile posts = {store.getState().profilePage.posts} newPostText = {store.getState().profilePage.newPostText} addPost = {addPost}  updatePostText = {updatePostText} />
		}
		}
		
		</StoreContext.Consumer>
		
	)
}
*/
let mapStateToProps = (state) =>{
	return {
		posts: getPosts(state),
		profile: getProfile(state),
		status: getStatus(state),
	}
}

/*let mapDispatchToProps = (dispatch) =>{
	return{
		addPost:()=>{
			dispatch(addPostActionCreator());
		},
		updatePostText:(newPost)=>{
			dispatch(updatePostTextActionCreator(newPost));
		}
	}
}
*/

export default compose(withAuthRedirect,withRouter,connect(mapStateToProps, {savePhotoThunkCreator, addPost, setProfileInformation, getProfileInfoThunkCreator, getUserStatusThunkCreator, setUserStatus, updateUserStatusThunkCreator, saveProfileInfo}))(ProfileAPIContainer);