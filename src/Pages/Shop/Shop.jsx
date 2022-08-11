import React, { useContext } from "react";
import CategoriesPreview from "../../components/CategoriesPreview/CategoriesPreview";
import CategoriesContext from "../../Store/Context/CategoriesContext/CategoriesContext";

import { ProductContainer } from "./Shop.style";
function Shop() {
	const { categoriesMap } = useContext(CategoriesContext);
	return (
		<ProductContainer>
			{Object.keys(categoriesMap).map((title) => {
				const products = categoriesMap[title];
				return (
					<CategoriesPreview
						key={title}
						title={title}
						products={products}
						limit={4}
						titleLink={true}
					/>
				);
			})}
		</ProductContainer>
	);
}

export default Shop;
