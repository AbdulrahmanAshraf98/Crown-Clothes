import React, { useContext } from "react";
import CartContext from "../../Store/Context/Cart/CartContext";
import Button, { buttonTypeClasses } from "../Ui/Button/Button";
import {
	CheckoutItemContainer,
	ImageContainer,
	BaseSpan,
	Quantity,
	Arrow,
	Value,
} from "./CheckoutItem.style";
function CheckoutItem({ cartItem }) {
	const { addToCartItemsHandler, removeItemFromCartItemsHandler, deleteItem } =
		useContext(CartContext);
	const addItem = () => addToCartItemsHandler(cartItem);
	const removeItem = () => removeItemFromCartItemsHandler(cartItem.id);
	const deleteItemHandler = () => {
		deleteItem(cartItem);
	};
	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={cartItem.imageUrl} />
			</ImageContainer>
			<BaseSpan>{cartItem.name} </BaseSpan>
			<Quantity>
				<Arrow onClick={removeItem}>&#10094;</Arrow>
				<Value>{cartItem.quantity}</Value>
				<Arrow onClick={addItem}>&#10095;</Arrow>
			</Quantity>
			<BaseSpan>{cartItem.price}</BaseSpan>
			<Button buttonType={buttonTypeClasses.remove} onClick={deleteItemHandler}>
				&#10005;
			</Button>
		</CheckoutItemContainer>
	);
}

export default CheckoutItem;
