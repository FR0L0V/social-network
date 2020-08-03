import React, {Suspense} from 'react';
import Aside from './Aside/Aside';
import ProfileContainer from './Profile/ProfileContainer';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import classes from './Main.module.css';
import {Switch, Route} from 'react-router-dom';
import DialogsContainer from './Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';
import {Redirect} from 'react-router-dom';
//import Login from './Login/Login';
let Login = React.lazy(()=>import ('./Login/Login'));



let Main = () =>{
return (  
		<main>
			<Aside />
			<div className={classes.content}>
				<Switch>
					<Route exact path = '/' render = {() => <Redirect to = '/profile' />} />
					<Route path = '/login' render = {() =><Suspense fallback={()=><div>Loading</div>} > <Login /> </Suspense>} />
					<Route path = '/profile/:userId?' render = {() => <ProfileContainer />} />
					<Route path = '/dialogs' render = {() => <DialogsContainer />} />
					<Route path = '/users' render = {() => <UsersContainer />} />
					<Route path = '/news' render = {() => <News />} />
					<Route path = '/music' render = {() => <Music />} />
					<Route path = '/settings' render = {() => <Settings />} />
					<Route path = '*' render = {()=> <div>404 not found</div>} />
				</Switch>
			</div>
		</main>
		)
}

export default Main;