import { useEffect, useState } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { createProduct, updateProduct } from "../actions/productsAction";

const Form = ({ currentId, setCurrentId }) => {
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
		<div className="container">
			<form onSubmit={handleSubmit} autoComplete="off" method="post">
				<h3>Adding a new Product</h3>
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
				<div className="form">
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
				</div>
				<button className="submit" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Form;
