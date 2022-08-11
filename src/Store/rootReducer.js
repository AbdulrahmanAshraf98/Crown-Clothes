import { combineReducers } from "redux";
import { cartReducer } from "./Cart/cartReducer";
import { categoriesReducer } from "./Categories/categoriesRudcer";
import { userReducer } from "./User/userReducer";

export const rootReducer = combineReducers({
	//nameOfReducerSLice:reducerFunction
	user: userReducer,
	categories: categoriesReducer,
	cart: cartReducer,
});
