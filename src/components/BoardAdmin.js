import { useEffect, useState } from "react";
// Components
import Product from "./Product";
import Form from "./Form";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadProducts, deleteProduct } from "../actions/productsAction";
// Router
import { Link } from "react-router-dom";

const BoardAdmin = () => {
	const [role, setRole] = useState("");
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
				<div className="board">
					<h2>Products</h2>
					<Form currentId={currentId} setCurrentId={setCurrentId} />
					{products.map((products) => (
						<Link to={`/admin`} key={products.id}>
							<Product
								id={products.id}
								imageUrl={products.imageUrl}
								model={products.model}
								key={products.id}
								setCurrentId={setCurrentId}
							/>
							<button onClick={() => dispatch(deleteProduct(products.id))}>
								Delete
							</button>
							<button onClick={() => setCurrentId(products.id)}>Edit</button>
						</Link>
					))}
				</div>
			) : (
				<h1>You are not authorized !</h1>
			)}
		</>
	);
};

export default BoardAdmin;
