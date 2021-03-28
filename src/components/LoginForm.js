import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { loginUser } from "../actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginForm = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { isLoggedIn } = useSelector((state) => state.auth);

	const initialValues = {
		username: "",
		password: "",
	};

	const LoginSchema = Yup.object().shape({
		username: Yup.string()
			.required("Username is required ")
			.min(3, "Username is too short - should be 3 chars minimum")
			.max(20, "PasUsernamesword is too long - should be 20 chars maximum"),

		password: Yup.string()
			.required("Password is required")
			.min(6, "Password is too short - should be 6 chars minimum")
			.max(40, "Password is too long - should be 40 chars maximum"),
	});

	if (isLoggedIn) {
		return <Redirect to="/shop" />;
	}
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={LoginSchema}
			onSubmit={(values) => {
				dispatch(loginUser(values.username, values.password, history));
			}}>
			{(formik) => {
				const { errors, touched, isValid, dirty, values } = formik;
				return (
					<StyledLogin>
						<h1>Sign in</h1>
						<StyledForm>
							<Form>
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
								<p>
									New here ? <Link to="/register">Signup</Link>
								</p>
								<button
									type="submit"
									className={!(dirty && isValid) ? "disabled-btn" : ""}
									disabled={!(dirty && isValid)}>
									Sign In
								</button>
							</Form>
						</StyledForm>
					</StyledLogin>
				);
			}}
		</Formik>
	);
};

const StyledLogin = styled.div`
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

export default LoginForm;
