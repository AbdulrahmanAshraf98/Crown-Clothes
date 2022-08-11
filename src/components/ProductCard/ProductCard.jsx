import React, { useContext } from "react";
import CartContext from "../../Store/Context/Cart/CartContext";
import Button, { buttonTypeClasses } from "../Ui/Button/Button";
import { Footer, Name, Price, ProductCardContainer } from "./ProductCard.style";
function ProductCard({ product }) {
	const cartContext = useContext(CartContext);
	const addProductToCart = () => cartContext.addToCartItemsHandler(product);
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
