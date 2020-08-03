import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


let postsElements = (p) =>{
	let a = [];
	a = p.map(post => {
		return <Post key ={post.id} text={post.text} likesCount={post.likesCount} />
	});
	return a;
}

/*let MyPosts = React.memo((props) =>{
	console.log('render');
	return(
		<div className={classes.my_posts}>
			{postsElements(props.posts)}
		</div>
	)
})*/


class MyPosts extends React.PureComponent{
	
	render=()=>{
		return(
			<div className={classes.my_posts}>
				{postsElements(this.props.posts)}
			</div>
		)
	}
}

export default MyPosts;