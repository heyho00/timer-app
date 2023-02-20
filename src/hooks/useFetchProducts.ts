import { useEffect, useState } from "react";

export default function useFetchProducts() {
	const [products, setProducts] = useState([]);
	
	useEffect(() => {
		const fetchProducts = async () => {
			const url = 'http://localhost:3000/products';
			const response = await fetch(url);
			const data = await response.json();
			setProducts(data.products);
		};

		fetchProducts();
	}, []);
	return products
}