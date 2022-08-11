import { CART_ACTION_TYPE } from "./cartTypes";
const initialState = {
	isCartOpen: false,
	cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case CART_ACTION_TYPE.ADD_TO_CART: {
			let newCartItems = [];
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
			return {
				...state,
				cartItems: newCartItems,
			};
		}

		case CART_ACTION_TYPE.REMOVE_FROM_CART: {
			const existingCartItemIndex = state.cartItems.findIndex(
				(item) => item.id === payload,
			);
			let newCartItems = [];
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

			return {
				...state,
				cartItems: newCartItems,
			};
		}
		case CART_ACTION_TYPE.DELETE_ITEM: {
			const newCartItems = state.cartItems.filter(
				(item) => item.id !== payload.id,
			);

			return {
				...state,
				cartItems: newCartItems,
			};
		}

		case CART_ACTION_TYPE.SET_IS_CART_OPEN: {
			return { ...state, isCartOpen: payload };
		}
		default:
			return state;
	}
};
