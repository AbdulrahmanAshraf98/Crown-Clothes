import React, { useEffect, useReducer, useState } from "react";
import { createActions } from "../../../Utlitize/Reducer/reducer.utils";
import { cartReducer, CART_ACTION_TYPE } from "../../Reducer/CartReducer";
import CartContext from "./CartContext";
const initialState = {
	cartItems: [],
	cartItemsCount: 0,
	cartTotalAmount: 0,
};
function CartContextProvider({ children }) {
	const [isCartOpen, setIsCartOpen] = useState(false);

	const [cartState, dispatch] = useReducer(cartReducer, initialState);
	const addToCartItemsHandler = (cartItem) => {
		dispatch(createActions(CART_ACTION_TYPE.ADD_TO_CART, cartItem));
	};
	const removeItemFromCartItemsHandler = (id) => {
		dispatch(createActions(CART_ACTION_TYPE.REMOVE_FROM_CART, id));
	};
	const deleteItem = (cartItem) => {
		dispatch(createActions(CART_ACTION_TYPE.DELETE_ITEM, cartItem));
	};
	const ToggleCartOpenHandler = (event) => {
		setIsCartOpen((prevState) => !prevState);
	};

	const cartContext = {
		isCartOpen,
		cartItems: cartState.cartItems,
		cartItemsCount: cartState.cartItemsCount,
		cartTotalAmount: cartState.cartTotalAmount,
		ToggleCartOpenHandler,
		addToCartItemsHandler,
		removeItemFromCartItemsHandler,
		deleteItem,
	};

	useEffect(() => {
		const newCartItemsCount = cartState.cartItems.reduce(
			(prev, current) => prev + current.quantity,
			0,
		);

		dispatch(
			createActions(
				CART_ACTION_TYPE.UPDATE_CART_ITEMS_COUNT,
				newCartItemsCount,
			),
		);
	}, [cartState.cartItems]);

	return (
		<CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
	);
}

export default CartContextProvider;

