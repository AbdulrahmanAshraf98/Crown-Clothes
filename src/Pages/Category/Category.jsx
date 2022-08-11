import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoriesPreview from "../../components/CategoriesPreview/CategoriesPreview";
import CategoriesContext from "../../Store/Context/CategoriesContext/CategoriesContext";

function Category() {
	const { category } = useParams();
	const { categoriesMap } = useContext(CategoriesContext);
	const [products, setProducts] = useState([]);
	useEffect(() => {
		setProducts(categoriesMap[category.toLowerCase()]);
	}, [category, categoriesMap]);
	return (
		products && (
			<section className="category-section">
				{<CategoriesPreview title={category} products={products} />}
			</section>
		)
	);
}

export default Category;
