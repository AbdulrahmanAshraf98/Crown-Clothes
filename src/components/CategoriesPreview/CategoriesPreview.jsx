import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import {
	CategoryPreviewContainer,
	Title,
	Preview,
} from "./CategoriesPreview.style";
function CategoriesPreview({
	title,
	products,
	titleLink = false,
	limit = null,
}) {
	return (
		<CategoryPreviewContainer className="X">
			<Title titleLink={titleLink}>
				{titleLink ? (
					<Link to={title}>{title.toUpperCase()}</Link>
				) : (
					<span>{title.toUpperCase()}</span>
				)}
			</Title>

			<Preview>
				{limit &&
					products
						.filter((product, index) => index < 4)
						.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
				{!limit &&
					products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</Preview>
		</CategoryPreviewContainer>
	);
}

export default CategoriesPreview;
