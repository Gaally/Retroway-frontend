import React, { useEffect, useState } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../actions/productsAction";
// Components
import Product from "../components/Product";
import { fetchSearch } from "../actions/productsAction";
// Styling & Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Router

import { Link } from "react-router-dom";

const Shop = () => {
	// Search Products
	const search = useDispatch();
	const [textInput, setTextInput] = useState("");

	const inputHandler = (e) => {
		setTextInput(e.target.value);
	};
	const submitSearch = (e) => {
		e.preventDefault();
		search(fetchSearch(textInput));
		setTextInput("");
	};
	// Fetch Products
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadProducts());
	}, [dispatch]);
	// Get data
	const { products, searched } = useSelector((state) => state.products);
	return (
		<ProductList>
			<StyledSearch>
				<input value={textInput} onChange={inputHandler} type="text" />
				<button onClick={submitSearch} type="submit">
					Search
				</button>
			</StyledSearch>
			{searched.length ? (
				<div className="searched">
					<h2>Results</h2>
					<Products>
						{searched.map((products) => (
							<Link to={`/${products.id}`}>
								<Product
									id={products.id}
									imageUrl={products.imageUrl}
									model={products.model}
									price={products.price}
									description={products.description}
									key={products.id}
								/>
							</Link>
						))}
					</Products>
				</div>
			) : (
				""
			)}
			<h2>Products</h2>
			<Products>
				{products.map((products) => (
					<Product
						id={products.id}
						imageUrl={products.imageUrl}
						model={products.model}
						price={products.price}
						description={products.description}
						key={products.id}
					/>
				))}
			</Products>
		</ProductList>
	);
};

const StyledSearch = styled.form`
	padding: 2rem 2rem;
	text-align: center;
	input {
		width: 20vw;
		font-size: 1rem;
		padding: 0.5rem;
		border: none;
		margin-top: 1rem;
		box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
		outline: none;
	}
`;

const ProductList = styled(motion.div)`
	padding: 0rem 5rem;
	h2 {
		padding: 5rem 0rem;
	}
`;

const Products = styled(motion.div)`
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(50vh, 1fr));
	grid-column-gap: 2rem;
	grid-row-gap: 5rem;
`;

export default Shop;
