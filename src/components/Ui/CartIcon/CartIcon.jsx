import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartIsOpen } from "../../../Store/Cart/cartActions";
import {
	CartCountSelector,
	SelectCartIsOpen,
} from "../../../Store/Cart/cartSelector";

import { CartIconContainer, ItemCount, ShopPageIcon } from "./CartIcon.style";
function CartIcon() {
	const cartIsOpen = useSelector(SelectCartIsOpen);
	const cartCount = useSelector(CartCountSelector);
	const dispatch = useDispatch();
	const ToggleCartOpenHandler = () => dispatch(setCartIsOpen(!cartIsOpen));

	return (
		<CartIconContainer
			className="cart-icon-container"
			onClick={ToggleCartOpenHandler}>
			<ShopPageIcon className="shopping-icon"></ShopPageIcon>
			<ItemCount className="item-count">{cartCount}</ItemCount>
		</CartIconContainer>
	);
}

export default CartIcon;
