import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../actions/productsAction";
// Components
import Product from "../components/Product";
// Styling & Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Router
import { Link } from "react-router-dom";

const Home = () => {
	// Fetch Products
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadProducts());
	}, [dispatch]);
	// Get data
	const { featured } = useSelector((state) => state.products);

	return (
		<FeaturedList>
			<h2>Featured Products</h2>

			<Featured>
				{featured.map((featured) => (
					<Link to={`/${featured.id}`} key={featured.id}>
						<Product
							id={featured.id}
							imageUrl={featured.imageUrl}
							model={featured.model}
							price={featured.price}
							description={featured.description}
							key={featured.id}
						/>
					</Link>
				))}
			</Featured>
		</FeaturedList>
	);
};

const FeaturedList = styled(motion.div)`
	padding: 0rem 5rem;
	h2 {
		padding: 5rem 0rem;
	}
`;

const Featured = styled(motion.div)`
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-column-gap: 3rem;
	grid-row-gap: 5rem;
`;

export default Home;
