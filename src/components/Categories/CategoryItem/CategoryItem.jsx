import React from "react";
// import "./categoryItem.scss";
import {
	CategoryContainer,
	CategoryBodyContainer,
	BackgroundImg,
	Title,
	Text,
} from "./CategoryItem.style";
function CategoryItem({ categoryItem }) {
	return (
		<CategoryContainer>
			<BackgroundImg backgroundImage={`url(${categoryItem.imageUrl})`} />
			<CategoryBodyContainer>
				<Title>{categoryItem.title}</Title>
				<Text>shop Now</Text>
			</CategoryBodyContainer>
		</CategoryContainer>
	);
}

export default CategoryItem;
