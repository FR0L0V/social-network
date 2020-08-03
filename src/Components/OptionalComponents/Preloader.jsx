import React from 'react';
import preloader from './../../Assets/images/preloader.gif';
import classes from './Preloader.module.css';


let Preloader = () => {
return <div className={classes.preloader}>
		<img src={preloader} />
	</div>
}

export default Preloader;