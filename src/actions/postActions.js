import * as types from './actionTypes';

export function getPosts() {
	return {type: types.GET_EXAMPLE_POSTS}
}

export function getPostsFromDB() {
	return {type: types.GET_POSTS}
}

export function createPost(post) {
	return {type: types.CREATE_POST, payload: post}
}