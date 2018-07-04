import initialState from './initialState';
import { SampleDataService } from '../services/sampledata-service';
import { GET_POSTS, SAVE_POST, GET_EXAMPLE_POSTS } from '../actions/actionTypes'
import { Post } from '../models/post'

export default function postReducer(state = initialState.posts, action) {
	// TODO: change this to posts service
	var sampleDataService = new SampleDataService(9);
	switch(action.type) {
		case GET_POSTS:
			return state;
		case SAVE_POST:
			return state;
		case GET_EXAMPLE_POSTS:
			var posts = sampleDataService.getPosts()
			return posts
		default:
			return state;
	}
}