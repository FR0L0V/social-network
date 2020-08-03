export let getUsers = (state) =>{
	return state.usersPage.users;
}

export let getUsersOnPage = (state) =>{
	return state.usersPage.usersOnPage;
}

export let getUsersTotalCount = (state) =>{
	return state.usersPage.usersTotalCount;
}

export let getCurrentPage  = (state) =>{
	return state.usersPage.currentPage;
}

export let getIsFetching = (state) =>{
	return state.usersPage.isFetching;
}

export let getIsFollowingInProgress = (state) =>{
	return state.usersPage.isFollowingInProgress;
}