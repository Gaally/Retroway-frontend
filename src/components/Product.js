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
			<img src={imageUrl} alt={model} />
			<h3>{model}</h3>
			<p>{price}</p>
		</StyledProduct>
	);
};

const StyledProduct = styled(motion.div)`
	min-height: 30vh;
	box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);

	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
	}
`;
export default Product;
