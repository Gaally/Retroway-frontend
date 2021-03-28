import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { registerUser } from "../actions/authAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RegisterForm = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const initialValues = {
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		password: "",
		repeatPassword: "",
		address: "",
		city: "",
		country: "",
		postalCode: "",
	};

	const RegisterSchema = Yup.object().shape({
		firstName: Yup.string()
			.required("First Name is required ")
			.min(2, "First Name is too short")
			.max(20, "First Name is too long"),
		lastName: Yup.string()
			.required("Last Name is required ")
			.min(2, "Last Name is too short")
			.max(20, "Last Name is too long"),
		username: Yup.string()
			.required("Username is required ")
			.min(3, "Username is too short")
			.max(20, "Username is too long"),
		email: Yup.string()
			.email("Invalid email address")
			.required("Required")
			.min(10, "Email is too short")
			.max(50, "Email is too long"),
		password: Yup.string()
			.min(6, "Password is too short")
			.max(40, "Password is too long")
			.required("Required"),
		repeatPassword: Yup.string()
			.required("Required")
			.oneOf([Yup.ref("password")], "Passwords must match"),
		address: Yup.string()
			.min(10, "Address is too short")
			.max(90, "Address is too long"),
		city: Yup.string().min(4, "City is too short").max(50, "City is too long"),
		country: Yup.string()
			.min(4, "Country is too short")
			.max(50, "Country is too long"),
		postalCode: Yup.string()
			.min(5, "Postal Code is too short")
			.max(15, "Postal Code is too long"),
	});

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={RegisterSchema}
			onSubmit={(values) => {
				dispatch(
					registerUser(
						values.firstName,
						values.lastName,
						values.username,
						values.email,
						values.password,
						values.address,
						values.city,
						values.country,
						values.postalCode,
						history,
					),
				);
			}}>
			{(formik) => {
				const { errors, touched, isValid, dirty, values } = formik;
				return (
					<StyledRegister>
						<h1>Sign up</h1>
						<StyledForm>
							<Form>
								<div className="form-row">
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
										name="firstName"
										component="span"
										className="error"
									/>
								</div>
								<div className="form-row">
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
								<div className="form-row">
									<label htmlFor="username">Username</label>
									<Field
										type="username"
										name="username"
										id="username"
										value={values.username}
										className={
											errors.username && touched.username ? "input-error" : null
										}
									/>
									<ErrorMessage
										name="username"
										component="span"
										className="error"
									/>
								</div>
								<div className="form-row">
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
								<div className="form-row">
									<label htmlFor="password">Password</label>
									<Field
										type="password"
										name="password"
										id="password"
										value={values.password}
										className={
											errors.password && touched.password ? "input-error" : null
										}
									/>
									<ErrorMessage
										name="password"
										component="span"
										className="error"
									/>
								</div>
								<div className="form-row">
									<label htmlFor="repeatPassword">Repeat Password</label>
									<Field
										type="password"
										name="repeatPassword"
										id="repeatPassword"
										value={values.repeatPassword}
										className={
											errors.repeatPassword && touched.repeatPassword
												? "input-error"
												: null
										}
									/>
									<ErrorMessage
										name="repeatPassword"
										component="span"
										className="error"
									/>
								</div>
								<div className="form-row">
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
								<div className="form-row">
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
								<div className="form-row">
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
								<div className="form-row">
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
								<p>
									Already have an account ? <Link to="/login">Login</Link>
								</p>
								<button
									type="submit"
									className={!(dirty && isValid) ? "disabled-btn" : ""}
									disabled={!(dirty && isValid)}>
									Sign up
								</button>
							</Form>
						</StyledForm>
					</StyledRegister>
				);
			}}
		</Formik>
	);
};

const StyledRegister = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 5%;

	h1 {
		margin-top: 10%;
	}
`;

const StyledForm = styled.div`
	display: flex;
	flex-direction: column;
	width: 70%;
	padding-left: 20%;

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

	.form-row {
		width: 50%;
		padding-bottom: 0.2rem;

		.error {
			color: #ff5858;
		}
	}

	p {
		text-align: center;
		font-size: 1rem;
		width: 50%;
		a {
			text-decoration: none;
			font-weight: bold;
			color: #f5f5fa;
		}
	}

	button {
		margin-left: 6rem;
	}

	@media (max-width: 768px) {
		width: 100%;

		.form-row {
			flex-direction: column;
			width: 100%;
		}

		p {
			width: 100%;
		}

		button {
			margin-left: 5rem;
		}
	}
`;
export default RegisterForm;
