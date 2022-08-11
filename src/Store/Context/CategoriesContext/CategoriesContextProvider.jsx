import React, { useEffect, useState } from "react";
import { getCatagoriesAndDocuments } from "../../../Utlitize/Firebase/Firebase";
import CategoriesContext from "./CategoriesContext";
function CategoriesContextProvider({ children }) {
	const [categoriesMap, setCategoriesMap] = useState({});
	const categoriesContext = { categoriesMap };
	useEffect(() => {
		const getCatagories = async () => {
			const categoryMap = await getCatagoriesAndDocuments();
			setCategoriesMap(categoryMap);
		};
		getCatagories();
	}, []);
	return (
		<CategoriesContext.Provider value={categoriesContext}>
			{children}
		</CategoriesContext.Provider>
	);
}

export default CategoriesContextProvider;
