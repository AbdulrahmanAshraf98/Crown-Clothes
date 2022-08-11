export const CART_ACTION_TYPE = {
	ADD_TO_CART: "ADD_TO_CART",
	REMOVE_FROM_CART: "REMOVE_FROM_CART",
	DELETE_ITEM: "DELETE_ITEM",
	UPDATE_CART_ITEMS_COUNT: "UPDATE_CART_ITEMS_COUNT",
};

export const cartReducer = (state = {}, action) => {
	const { type, payload } = action;
	switch (type) {
		case "ADD_TO_CART": {
			let newCartItems = [];
			let newCartAmount = 0;
			const existingCartItemIndex = state.cartItems.findIndex(
				(item) => item.id === payload.id,
			);
			const existingCartItem = state.cartItems[existingCartItemIndex];
			if (existingCartItem) {
				const updateExistingCartItem = {
					...existingCartItem,
					quantity: existingCartItem.quantity + 1,
				};
				newCartItems = [...state.cartItems];
				newCartItems[existingCartItemIndex] = updateExistingCartItem;
			} else {
				newCartItems = [...state.cartItems, { ...payload, quantity: 1 }];
			}
			newCartAmount = state.cartTotalAmount + payload.price;
			return {
				...state,
				cartItems: newCartItems,
				cartTotalAmount: newCartAmount,
			};
		}

		case "REMOVE_FROM_CART": {
			const existingCartItemIndex = state.cartItems.findIndex(
				(item) => item.id === payload,
			);
			let newCartItems = [];
			let newCartAmount = 0;
			const existingCartItem = state.cartItems[existingCartItemIndex];
			if (existingCartItem.quantity > 1) {
				const updateExistingCartItem = {
					...existingCartItem,
					quantity: existingCartItem.quantity - 1,
				};
				newCartItems = [...state.cartItems];
				newCartItems[existingCartItemIndex] = updateExistingCartItem;
			} else {
				newCartItems = state.cartItems.filter((item) => item.id !== payload);
			}
			newCartAmount = state.cartTotalAmount - existingCartItem.price;
			return {
				...state,
				cartItems: newCartItems,
				cartTotalAmount: newCartAmount,
			};
		}
		case "DELETE_ITEM": {
			let newCartAmount = 0;
			const newCartItems = state.cartItems.filter(
				(item) => item.id !== payload.id,
			);
			newCartAmount = state.cartTotalAmount - payload.price * payload.quantity;
			return {
				...state,
				cartItems: newCartItems,
				cartTotalAmount: newCartAmount,
			};
		}
		case "UPDATE_CART_ITEMS_COUNT": {
			return { ...state, cartItemsCount: action.payload };
		}
	}
};
