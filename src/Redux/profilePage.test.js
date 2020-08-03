import React from 'react';

import profilePageReducer, {addPost} from './ProfilePageReducer';


let state = {
    posts:[
		{id:3, text:'kjhdfgkhdf', likesCount:12, key:3},
		{id:2, text:'tevfgr', likesCount:13, key:2},
		{id:1, text:'dfgdfgdf', likesCount:0, key:1},
	],
}

test('the total length of new posts was incremented', () => {
  let action = addPost('erer');
  let newPosts = profilePageReducer(state,action);
  expect(newPosts.posts.length).toBe(4);
});

test('the new post text corresponds to the expected value', () => {
  let action = addPost('erer');
  let newPosts = profilePageReducer(state,action);
  expect(newPosts.posts[0].text).toBe(action.text);
});

test('the new post key correspondsto the expected value', () => {
  let action = addPost('erer');
  let newPosts = profilePageReducer(state,action);
  expect(newPosts.posts[0].key).toBe(4);
});

