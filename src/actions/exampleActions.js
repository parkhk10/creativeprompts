import * as types from './actionTypes';

export function addCount(count) {
	console.log("add count called ");
	return {type: types.ADD_COUNT, incrementBy: count};
}
