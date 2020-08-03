import React from 'react';
import classes from './Post.module.css';

let Post = (props) =>{
	return(
		<div className={classes.post}>
			<div className={classes.postContent}>
				<div className={classes.photo}>
					<img src="" alt="" />
				</div>
				<div className={classes.text}>
					<p>{props.text}</p>
				</div>
			</div>
			<div className={classes.like}>
				<span>{props.likesCount} likes</span>
			</div>
		</div>
	)
}

export default Post;