import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../actions/productsAction";
// Components
import Product from "../components/Product";
// Styling & Animation
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import AliceCarousel from "react-alice-carousel";

const Home = () => {
	// Fetch Products
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadProducts());
	}, [dispatch]);
	// Get data
	const { featured } = useSelector((state) => state.products);

	//Slider
	const responsive = {
		0: { items: 1 },
		568: { items: 2 },
		1024: { items: 3 },
	};

	return (
		<FeaturedList>
			<h2>Featured Products</h2>
			<Featured>
				<AliceCarousel
					mouseTracking
					responsive={responsive}
					disableButtonsControls>
					{featured.map((featured) => (
						<Product
							id={featured.id}
							imageUrl={featured.imageUrl}
							model={featured.model}
							price={featured.price}
							description={featured.description}
							key={featured.id}
						/>
					))}
				</AliceCarousel>
			</Featured>
		</FeaturedList>
	);
};

const FeaturedList = styled(motion.div)`
	padding: 2rem 3rem;
	h2 {
		padding: 3rem 1rem;
	}
`;

const Featured = styled(motion.div)``;

export default Home;
