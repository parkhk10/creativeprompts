import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
	exampleReducer,
	postReducer
});

export default rootReducer;
