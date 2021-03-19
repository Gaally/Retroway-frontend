import React from "react";
// Styling & Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/productsAction";
import { Link } from "react-router-dom";

const Product = ({ model, imageUrl, price, id }) => {
	// Load details
	const dispatch = useDispatch();
	const loadDetailHandler = () => {
		dispatch(loadDetail(id));
	};

	return (
		<StyledProduct onClick={loadDetailHandler}>
			<Link to={`/${id}`} key={id}>
				<img src={imageUrl} alt={model} />
				<h3>{model}</h3>
				<p>{price} €</p>
			</Link>
		</StyledProduct>
	);
};

const StyledProduct = styled(motion.div)`
	background-color: #09101c;
	box-shadow: 5px 5px 10px #060d1a;
	margin: 2rem 1rem;
	padding-bottom: 2.5rem;

	h3 {
		text-transform: uppercase;
		letter-spacing: 0.2rem;
	}

	p {
		padding-left: 1.5rem;
	}

	img {
		overflow: hidden;
		width: 100%;
		height: 60vh;
		object-fit: cover;
	}
`;

export default Product;
