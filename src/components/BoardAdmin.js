import { useEffect, useState } from "react";
// Components
import Product from "./Product";
import Form from "./Form";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadProducts, deleteProduct } from "../actions/productsAction";
// Router
import { Link } from "react-router-dom";
import styled from "styled-components";

const BoardAdmin = () => {
	const { user: currentUser } = useSelector((state) => state.auth);

	const [currentId, setCurrentId] = useState(0);
	// Fetch Products
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadProducts());
	}, [currentId, dispatch]);
	// Get data
	const { products } = useSelector((state) => state.products);

	return (
		<>
			{currentUser.roles.includes("ROLE_ADMIN") ? (
				<StyledAdmin>
					<h1>admin board</h1>
					<Form currentId={currentId} setCurrentId={setCurrentId} />
					<StyledProduct>
						{products.map((products) => (
							<Link to={`/admin`} key={products.id}>
								<Product
									id={products.id}
									imageUrl={products.imageUrl}
									model={products.model}
									price={products.price}
									key={products.id}
									setCurrentId={setCurrentId}
								/>
								<button onClick={() => dispatch(deleteProduct(products.id))}>
									Delete
								</button>
								<button onClick={() => setCurrentId(products.id)}>Edit</button>
							</Link>
						))}
					</StyledProduct>
				</StyledAdmin>
			) : (
				<h1>You are not authorized !</h1>
			)}
		</>
	);
};

const StyledAdmin = styled.div`
	margin: 0;

	h1 {
		margin: 10%;
	}
`;

const StyledProduct = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;

	img {
		width: 100%;
		height: 20vh;
		overflow: hidden;
	}

	h3 {
		font-size: 1rem;
	}

	p {
		font-size: 0.8rem;
	}

	div {
		width: 20vw;
		overflow: hidden;
		height: auto;
		padding-bottom: 1.5rem;
	}

	button {
		font-size: 0.8rem;
		padding: 0.4rem 0.8rem;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		align-content: center;
		width: 100%;

		div {
			width: 70vw;

			padding-bottom: 1rem;
		}

		img {
			width: 100%;
		}

		h3 {
			font-size: 0.9rem;
		}

		p {
			font-size: 0.6rem;
		}

		button {
			margin-left: 5rem;
		}
	}
`;

export default BoardAdmin;
