import { combineReducers } from "redux";
import { CATEGORIES_ACTIONS_TYPE } from "./categoriesType";
const initialState = {
	categories: [],
	isLoading: false,
	isError: null,
};
export const categoriesReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case CATEGORIES_ACTIONS_TYPE.FETCH_CATEGORIES_START:
			return { ...state, isLoading: true };
		case CATEGORIES_ACTIONS_TYPE.FETCH_CATEGORIES_SUCCESS:
			return { ...state, categories: payload, isLoading: false };
		case CATEGORIES_ACTIONS_TYPE.FETCH_CATEGORIES_FAILED:
			return { ...state, isError: payload, isLoading: false };
		default:
			return state;
	}
};
