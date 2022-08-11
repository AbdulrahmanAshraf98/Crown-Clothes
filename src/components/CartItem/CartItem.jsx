import React from "react";
import { CartItemContainer, ItemDetails, Name, Price } from "./CartItem.style";
function CartItem({ cartItem }) {
	return (
		<CartItemContainer>
			<img src={cartItem.imageUrl} alt={cartItem.name} />
			<ItemDetails>
				<Name>{cartItem.name}</Name>
				<Price>{cartItem.quantity + "x" + cartItem.price}</Price>
			</ItemDetails>
		</CartItemContainer>
	);
}

export default CartItem;
