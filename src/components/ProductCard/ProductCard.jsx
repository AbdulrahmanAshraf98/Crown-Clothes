import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Store/Cart/cartActions";
import Button, { buttonTypeClasses } from "../Ui/Button/Button";
import { Footer, Name, Price, ProductCardContainer } from "./ProductCard.style";
function ProductCard({ product }) {
	const dispatch = useDispatch();
	const addProductToCart = () => dispatch(addItemToCart(product));
	return (
		<ProductCardContainer>
			<img src={product.imageUrl} alt={`${product.name}`} />
			<Footer>
				<Name>{product.name}</Name>
				<Price>{product.price}</Price>
			</Footer>
			<Button buttonType={buttonTypeClasses.invert} onClick={addProductToCart}>
				Add To Cart
			</Button>
		</ProductCardContainer>
	);
}

export default ProductCard;
