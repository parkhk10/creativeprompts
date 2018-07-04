import initialState from './initialState';
import { ADD_COUNT } from '../actions/actionTypes';

export default function exampleReducer(state = initialState.countExample, action) {
	var newState;
	switch (action.type) {
		case ADD_COUNT:
			console.log("ADD_COUNT action. Previous count in store is " + state)
			newState = state + action.incrementBy;
			return newState;
		default:
			return state;
	}
}
