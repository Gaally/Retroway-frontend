import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../actions/shoppingAction";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CheckoutForm = () => {
	const dispatch = useDispatch();
	const { user: currentUser } = useSelector((state) => state.auth);
	const { cart } = useSelector((state) => state.shopping);

	const cartTotal = parseInt(
		cart.reduce((total, { price = 0 }) => total + price, 0),
	);
	const idTotal = cart.map((product) => product.id);
	console.log(idTotal);

	const initialValues = {
		email: currentUser.email || "",
		firstName: currentUser.firstName || "",
		lastName: currentUser.lastName || "",
		address: currentUser.address || "",
		city: currentUser.city || "",
		country: currentUser.country || "",
		postalCode: currentUser.postalCode || "",
		shipTo: currentUser.address || "",
		totalCost: cartTotal,
		productsId: idTotal,
	};

	const CheckoutSchema = Yup.object().shape({
		email: Yup.string()
			.email("Invalid email address")
			.required("Email is Required"),
		firstName: Yup.string().required("First Name is required "),
		lastName: Yup.string().required("Last Name is required "),
		address: Yup.string().required("Address is required "),
		city: Yup.string().required("City is required "),
		country: Yup.string().required("Country is required "),
		postalCode: Yup.string().required("Postal code is required "),
		shipTo: Yup.string().required("Shipping address is required"),
	});

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={CheckoutSchema}
			onSubmit={(values) => {
				dispatch(createOrder(values.shipTo, values.totalCost));
			}}>
			{(formik) => {
				const { errors, touched, values } = formik;
				return (
					<StyledWrapper>
						<h1>contact information</h1>
						<StyledContainer>
							<Form>
								<div className="email">
									<label htmlFor="email">Email</label>
									<Field
										type="email"
										name="email"
										id="email"
										value={values.email}
										className={
											errors.email && touched.email ? "input-error" : null
										}
									/>
									<ErrorMessage
										name="email"
										component="span"
										className="error"
									/>
								</div>

								<div className="firstName">
									<label htmlFor="firstName">First Name</label>
									<Field
										type="firstName"
										name="firstName"
										id="firstName"
										value={values.firstName}
										className={
											errors.firstName && touched.firstName
												? "input-error"
												: null
										}
									/>
									<ErrorMessage
										name="username"
										component="span"
										className="error"
									/>
								</div>

								<div className="lastName">
									<label htmlFor="lastName">Last Name</label>
									<Field
										type="lastName"
										name="lastName"
										id="lastName"
										value={values.lastName}
										className={
											errors.lastName && touched.lastName ? "input-error" : null
										}
									/>
									<ErrorMessage
										name="lastName"
										component="span"
										className="error"
									/>
								</div>
								<div className="address-info">
									<div className="address">
										<label htmlFor="address">Address</label>
										<Field
											type="address"
											name="address"
											id="address"
											value={values.address}
											className={
												errors.address && touched.address ? "input-error" : null
											}
										/>
										<ErrorMessage
											name="address"
											component="span"
											className="error"
										/>
									</div>
									<div className="city">
										<label htmlFor="city">City</label>
										<Field
											type="city"
											name="city"
											id="city"
											value={values.city}
											className={
												errors.city && touched.city ? "input-error" : null
											}
										/>
										<ErrorMessage
											name="city"
											component="span"
											className="error"
										/>
									</div>

									<div className="country">
										<label htmlFor="country">Country</label>
										<Field
											type="country"
											name="country"
											id="country"
											value={values.country}
											className={
												errors.country && touched.country ? "input-error" : null
											}
										/>
										<ErrorMessage
											name="country"
											component="span"
											className="error"
										/>
									</div>
									<div className="postalCode">
										<label htmlFor="postalCode">Postal Code</label>
										<Field
											type="postalCode"
											name="postalCode"
											id="postalCode"
											value={values.postalCode}
											className={
												errors.postalCode && touched.postalCode
													? "input-error"
													: null
											}
										/>
										<ErrorMessage
											name="postalCode"
											component="span"
											className="error"
										/>
									</div>
								</div>
								<div className="shipTo">
									<label htmlFor="shipTo">Shipping Address</label>
									<Field
										type="shipTo"
										name="shipTo"
										id="shipTo"
										value={values.shipTo}
										className={
											errors.shipTo && touched.shipTo ? "input-error" : null
										}
									/>
									<ErrorMessage
										name="shipTo"
										component="span"
										className="error"
									/>
								</div>
								<div className="totalCost">
									<label htmlFor="totalCost">Total Cost</label>
									<p>{values.totalCost} €</p>
								</div>

								<button type="submit">Checkout</button>
								<Link to="/cart">
									<button>Go Back to Cart</button>
								</Link>
							</Form>
						</StyledContainer>
					</StyledWrapper>
				);
			}}
		</Formik>
	);
};

const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 5%;
	width: 80%;

	h1 {
		margin: 10%;
	}

	@media (max-width: 768px) {
		width: 100%;

		h1 {
			text-align: center;
		}
	}
`;

const StyledContainer = styled.div`
	width: 65%;
	padding: 5% 10%;
	input {
		background-color: rgba(79, 79, 79, 35%);
		width: 100%;
		min-height: 25px;
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
	p {
		font-size: 1rem;
	}

	label {
		font-size: 0.9rem;
		letter-spacing: 2px;
		padding-top: 0.5rem;
	}

	.email,
	.firstName,
	.lastName {
		display: flex;
		justify-content: space-between;
		width: 100%;

		div {
			width: 45%;
		}
	}

	.lastName {
		margin-bottom: 5px;
	}

	.address-info {
		display: flex;
		justify-content: space-between;
		width: 100%;

		div {
			width: 45%;
			margin: 0 5px 5px 0;
		}
	}

	.shipTo,
	.totalCost {
		display: flex;
		justify-content: space-between;

		div {
			width: 45%;
		}
	}

	@media (max-width: 768px) {
		width: 100%;

		.email,
		.firstName,
		.lastName,
		.address-info,
		.shipTo,
		.totalCost {
			flex-direction: column;
			width: 100%;
			justify-content: space-between;

			div {
				display: flex;
				align-items: center;
				flex-direction: column;
				width: 100%;
			}
			input {
				margin: 5px 0;
				min-height: 30px;
			}
		}
	}
`;

export default CheckoutForm;
