import {usersAPI} from './../api/api';


let defaultState = {
	users:[
	], 
	currentPage:1,
	usersTotalCount:0,
	usersOnPage:10,
	isFetching:false,
	isFollowingInProgress:[],
}

let usersPageReducer = (state = defaultState, action)=>{
	switch(action.type){ 
		case 'FOLLOW'://{type:'FOLLOW', id:number}
			
			return {
				...state,
				users: state.users.map(u => {
					
					if(u.id === action.id){
						return{...u, followed : true};
					}
					return u;
				}
				),
			}
		case 'UNFOLLOW'://{type:'UNFOLLOW', id:number}
		
			return {
				...state,
				users:state.users.map( u => {
					if(u.id === action.id){
						return {...u, followed:false}
					}
					return u;
				}
				)
			}
		
		case 'SET_USERS'://{type:'SET_USERS', users:[]}
			return{
				...state, 
				users:[...action.users],
			}
			
			
		case 'SET_USERS_TOTAL_COUNT'://{type:'SET_TOTAL_PAGES', value:number}
			return{
				...state,
				usersTotalCount:action.value,
			}
			
		case 'SET_CURRENT_PAGE'://{type:"SET_CURRENT_PAGE", value:number}
			return{
				...state,
				currentPage:action.value,
			}
			
		case 'TOGGLE_IS_FETCHING'://{type:"TOGGLE_IS_FETCHING", value:number}
			return{
				...state,
				isFetching:action.isFetching,
			}
			
		case 'TOGGLE_FOLLOWING_PROGRESS'://{type:"TOGGLE_FOLLOWING_PROGRESS", isFetching:true/false}
			return{
				...state,
				isFollowingInProgress:(action.isFetching)?[...state.isFollowingInProgress, action.userId]:state.isFollowingInProgress.filter(id => id != action.userId),
			}
			
		default:
		return  state;
	}
}

export default usersPageReducer;

export let follow =  (id) =>{
	return{
		type:'FOLLOW',
		id:id,
	}
};

export let unfollow =  (id) =>{
	return{
		type:'UNFOLLOW',
		id:id,
	}
};

export let setUsers =  (users) =>{
	return{
		type:'SET_USERS',
		users:users,
	}
};

export let setUsersTotalCount = (value) =>{
	return{
		type:'SET_USERS_TOTAL_COUNT',
		value:value,
	}
};

export let setCurrentPage= (value) =>{
	return{
		type:'SET_CURRENT_PAGE',
		value:value,
	}
}

export let toggleIsFetching= (isFetching) =>{
	return{
		type:'TOGGLE_IS_FETCHING',
		isFetching:isFetching,
	}
}

export let toggleFollowingProgress =  (isFetching, userId) =>{
	return{
		type:'TOGGLE_FOLLOWING_PROGRESS',
		isFetching:isFetching,
		userId:userId,
	}
}

export let getUsersThunkCreator = (currentPage, usersOnPage) => (dispatch) =>{
	dispatch(toggleIsFetching(true));
	usersAPI.getUsers(currentPage,usersOnPage).then(data=>{
		dispatch(setUsers(data.items));
		dispatch(setUsersTotalCount(data.totalCount));
		dispatch(toggleIsFetching(false));
	});
}

export let  followUserThunkCreator = (userId) => (dispatch)=>{
	dispatch(toggleFollowingProgress(true, userId));
	usersAPI.followUser(userId).then(data=>{
		if(data.resultCode === 0){
			dispatch(follow(userId))
		}
		dispatch(toggleFollowingProgress(false,userId));
	});
}

export let  unfollowUserThunkCreator = (userId) => (dispatch)=>{
	dispatch(toggleFollowingProgress(true, userId));
	usersAPI.unfollowUser(userId).then(data=>{
		if(data.resultCode === 0){
			dispatch(unfollow(userId))
		}
		dispatch(toggleFollowingProgress(false,userId));
	});
}