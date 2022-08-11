import { createActions } from "../../Utlitize/Reducer/reducer.utils";
import { CART_ACTION_TYPE } from "./cartTypes";

export const setCartIsOpen = (boolean) =>
	createActions(CART_ACTION_TYPE.SET_IS_CART_OPEN, boolean);
export const addItemToCart = (item) =>
	createActions(CART_ACTION_TYPE.ADD_TO_CART, item);
export const removeItemFromCart = (id) =>
	createActions(CART_ACTION_TYPE.REMOVE_FROM_CART, id);
export const deleteItemFromCart = (item) =>
	createActions(CART_ACTION_TYPE.DELETE_ITEM, item);
