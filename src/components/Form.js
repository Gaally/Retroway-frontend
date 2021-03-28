import { useState } from "react";
// Redux
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createProduct, updateProduct } from "../actions/productsAction";

const Form = ({ currentId }) => {
	const [postProduct, setPostProduct] = useState({
		model: "",
		imageUrl: "",
		description: "",
		price: "",
		stockQuantity: "",
		featured: false,
	});
	const dispatch = useDispatch();

	// Form

	const handleSubmit = (e) => {
		e.preventDefault();
		if (currentId === 0) {
			dispatch(createProduct(postProduct));
		} else {
			dispatch(updateProduct(currentId, postProduct));
		}
	};

	return (
		<StyledForm>
			<form onSubmit={handleSubmit} autoComplete="off" method="post">
				<h2>{currentId ? "Edit a product" : "Add a new product"}</h2>
				<div className="form">
					<label>Model</label>
					<input
						type="text"
						name="model"
						label="Model"
						value={postProduct.model}
						onChange={(e) =>
							setPostProduct({ ...postProduct, model: e.target.value })
						}
					/>
				</div>
				<div className="form">
					<label>Image</label>
					<input
						type="text"
						name="imageUrl"
						label="Image"
						value={postProduct.imageUrl}
						onChange={(e) =>
							setPostProduct({ ...postProduct, imageUrl: e.target.value })
						}
					/>
				</div>
				<div className="form">
					<label>Description</label>
					<input
						type="text"
						name="description"
						label="Description"
						value={postProduct.description}
						onChange={(e) =>
							setPostProduct({ ...postProduct, description: e.target.value })
						}
					/>
				</div>
				<div className="form">
					<label>Price</label>
					<input
						type="text"
						name="price"
						label="Price"
						value={postProduct.price}
						onChange={(e) =>
							setPostProduct({ ...postProduct, price: e.target.value })
						}
					/>
				</div>
				<div className="form">
					<label>Stock</label>
					<input
						type="text"
						name="stockQuantity"
						label="Stock"
						value={postProduct.stockQuantity}
						onChange={(e) =>
							setPostProduct({
								...postProduct,
								stockQuantity: e.target.value,
							})
						}
					/>
				</div>
				<div className="checked-form">
					<label>Featured</label>
					<input
						type="checkbox"
						name="featured"
						label="Featured"
						value={postProduct.featured}
						checked={postProduct.featured}
						onChange={(e) =>
							setPostProduct({
								...postProduct,
								featured: e.target.checked,
							})
						}
					/>
					<div className="b-input"></div>
				</div>
				<button className="submit" type="submit">
					Submit
				</button>
			</form>
		</StyledForm>
	);
};

const StyledForm = styled.div`
	display: flex;
	justify-content: center;
	width: 90%;
	margin: 5rem;
	border-bottom: 1px solid rgba(79, 79, 79, 35%);

	h2 {
		font-size: 2rem;
		padding-bottom: 2rem;
	}

	input {
		background-color: rgba(79, 79, 79, 35%);
		width: 100%;
		border: 0;
		font-size: 1rem;
		padding: 0.2rem;
		margin: 5px;
		border-radius: 4px;
		color: #f5f5fa;
		font-weight: lighter;
		border: none;
		outline: none;
		&:focus {
			border: none;
		}
	}
	.checked-form input {
		margin: 0 0 0 8rem;
	}

	@media (max-width: 768px) {
		margin: 0;
		width: 100%;
	}
`;

export default Form;
