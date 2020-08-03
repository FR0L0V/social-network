import React from 'react';
import classes from './Aside.module.css';
import {NavLink} from 'react-router-dom';

let Aside = () => {
	return <aside className={classes.nav}>
				<nav>
					<div><NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink></div>
					<div><NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink></div>
					<div><NavLink to="/users" activeClassName={classes.active}>Users</NavLink></div>
					<div><NavLink to="/music" activeClassName={classes.active}>Music</NavLink></div>
					<div><NavLink to="/news" activeClassName={classes.active}>News</NavLink></div>
					<div><NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink></div>
				</nav>
			</aside>
}

export default Aside;