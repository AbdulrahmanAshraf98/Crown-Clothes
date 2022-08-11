import React from "react";
import {
	CategoryContainer,
	CategoryBodyContainer,
	BackgroundImg,
	Title,
	Text,
} from "./CategoryItem.style";
function CategoryItem({ categoryItem }) {
	return (
		<CategoryContainer to={categoryItem.linkUrl}>
			<BackgroundImg backgroundImage={`url(${categoryItem.imageUrl})`} />
			<CategoryBodyContainer>
				<Title>{categoryItem.title}</Title>
				<Text>shop Now</Text>
			</CategoryBodyContainer>
		</CategoryContainer>
	);
}

export default React.memo(CategoryItem);
