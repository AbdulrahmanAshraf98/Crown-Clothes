import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CategoriesPreview from "../../components/CategoriesPreview/CategoriesPreview";
import Spinner from "../../components/Ui/Spinner/Spinner";
import {
	categoriesMapSelector,
	selectCategoriesIsError,
	selectCategoriesIsLoading,
} from "../../Store/Categories/categoriesSelector";

function Category() {
	const { category } = useParams();
	const categoriesMap = useSelector(categoriesMapSelector);
	const categoriesIsLoading = useSelector(selectCategoriesIsLoading);
	const categoriesFetchedError = useSelector(selectCategoriesIsError);
	const [products, setProducts] = useState([]);
	useEffect(() => {
		setProducts(categoriesMap[category.toLowerCase()]);
	}, [category, categoriesMap]);
	return (
		<>
			{categoriesIsLoading && <Spinner></Spinner>}
			{products && !categoriesIsLoading && (
				<section className="category-section">
					{<CategoriesPreview title={category} products={products} />}
				</section>
			)}
		</>
	);
}

export default Category;
