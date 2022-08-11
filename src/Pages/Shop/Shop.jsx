import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchCategoriesAsync } from "../../Store/Categories/categoriesActions";
import CategoriesPage from "../CategoriesPage/CategoriesPage";
import Category from "../Category/Category";
function Shop() {
	const dispatch = useDispatch();
	useEffect(() => {
		fetchCategoriesAsync(dispatch);
	}, [dispatch]);
	return (
		<Routes>
			<Route index element={<CategoriesPage />} />
			<Route path=":category" element={<Category />} />
		</Routes>
	);
}

export default Shop;
