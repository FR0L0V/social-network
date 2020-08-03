import React from 'react';
import Header from './Header';
import {setUserData} from './../../Redux/authReducer';
import {connect} from 'react-redux';
import {getUserDataThunkCreator, logoutThunkCreator} from './../../Redux/authReducer';

class HeaderContainer extends React.Component{
	
	componentDidMount = () =>{
		this.props.getUserDataThunkCreator();
	}
	
	render=()=>{
		return <Header {...this.props} />
	}
}
let matchStateToProps = (state) => {
	return{
		isAuth: state.auth.isAuth,
		login: state.auth.login,
	}
}

export default connect(matchStateToProps, {setUserData,getUserDataThunkCreator, logoutThunkCreator})(HeaderContainer);