import React from "react";
import { useSelector } from "react-redux";
import CategoriesPreview from "../../components/CategoriesPreview/CategoriesPreview";
import Spinner from "../../components/Ui/Spinner/Spinner";
import {
	categoriesMapSelector,
	selectCategoriesIsLoading,
} from "../../Store/Categories/categoriesSelector";

import { ProductContainer } from "../Shop/Shop.style";

function CategoriesPage() {
	const categoriesMap = useSelector(categoriesMapSelector);
	const categoriesIsLoading = useSelector(selectCategoriesIsLoading);
	const loading = !categoriesMap && categoriesIsLoading;
	return (
		<>
			{loading && <Spinner></Spinner>}
			{!loading && (
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
			)}
		</>
	);
}

export default CategoriesPage;
