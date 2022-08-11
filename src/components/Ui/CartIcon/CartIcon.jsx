import React, { useContext } from "react";

import CartContext from "../../../Store/Context/Cart/CartContext";
import { CartIconContainer, ItemCount, ShopPageIcon } from "./CartIcon.style";
function CartIcon() {
	const cartContext = useContext(CartContext);
	return (
		<CartIconContainer
			className="cart-icon-container"
			onClick={cartContext.ToggleCartOpenHandler}>
			<ShopPageIcon className="shopping-icon"></ShopPageIcon>
			<ItemCount className="item-count">{cartContext.cartItemsCount}</ItemCount>
		</CartIconContainer>
	);
}

export default CartIcon;
