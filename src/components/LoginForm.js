import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { loginUser } from "../actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { Link } from "react-router-dom";

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
					<div className="container">
						<h1>Sign in</h1>
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

							<button
								type="submit"
								className={!(dirty && isValid) ? "disabled-btn" : ""}
								disabled={!(dirty && isValid)}>
								Sign In
							</button>
						</Form>
						New here? <Link to="/register">Signup</Link>
					</div>
				);
			}}
		</Formik>
	);
};

export default LoginForm;
