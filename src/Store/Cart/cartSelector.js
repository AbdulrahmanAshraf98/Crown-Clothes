import { createSelector } from "reselect";
const selectCartItemsReducer = (state) => state.cart;

export const SelectCartItems = createSelector(
	[selectCartItemsReducer],
	(cart) => cart.cartItems,
);
export const SelectCartIsOpen = createSelector(
	[selectCartItemsReducer],
	(cart) => cart.isCartOpen,
);
export const CartCountSelector = createSelector(
	[SelectCartItems],
	(cartItems) =>
		cartItems.reduce(
			(total, cartItem) => (total = total + cartItem.quantity),
			0,
		),
);
export const cartTotalSelector = createSelector(
	[SelectCartItems],
	(cartItems) =>
		cartItems.reduce(
			(total, cartItem) => (total = total + cartItem.quantity * cartItem.price),
			0,
		),
);
