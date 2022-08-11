import { getCatagoriesAndDocuments } from "../../Utlitize/Firebase/Firebase";
import { createActions } from "../../Utlitize/Reducer/reducer.utils";
import { CATEGORIES_ACTIONS_TYPE } from "./categoriesType";

export const setCategoriesArray = (categories) =>
	createActions(CATEGORIES_ACTIONS_TYPE.SET_CATEGORIES, categories);

export const fetchCategoriesStart = () =>
	createActions(CATEGORIES_ACTIONS_TYPE.FETCH_CATEGORIES_START);
export const fetchCategoriesSuccess = (categories) =>
	createActions(CATEGORIES_ACTIONS_TYPE.FETCH_CATEGORIES_SUCCESS, categories);
export const fetchCategoriesFailed = (error) =>
	createActions(CATEGORIES_ACTIONS_TYPE.FETCH_CATEGORIES_FAILED, error);
export const fetchCategoriesAsync = async (dispatch) => {
	dispatch(fetchCategoriesStart());
	try {
		const categoriesArray = await getCatagoriesAndDocuments();
		dispatch(fetchCategoriesSuccess(categoriesArray));
	} catch (error) {
		dispatch(fetchCategoriesFailed);
	}
};
