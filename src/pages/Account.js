import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Account = () => {
	const { user: currentUser } = useSelector((state) => state.auth);

	if (!currentUser) {
		return <Redirect to="/login" />;
	}

	return (
		<StyledContainer>
			<h1>account</h1>
			<StyledInformation>
				<div className="title">
					<h2>Information</h2>
				</div>
				<div className="info-account">
					<h3>Email:</h3>
					<p>{currentUser.email}</p>
					<h3>Username:</h3>
					<p>{currentUser.username}</p>
				</div>
				<div className="info-user">
					<h3>First Name:</h3>
					<p>{currentUser.firstName}</p>
					<h3>Last Name:</h3>
					<p>{currentUser.lastName}</p>
				</div>
				<div className="info-address">
					<h3>Address:</h3>
					<p>{currentUser.address}</p>
					<p>{currentUser.city}</p>
					<p>{currentUser.country}</p>
					<p>{currentUser.postalCode}</p>
				</div>
				<div className="title">
					<h2>Authorities</h2>
				</div>
				<div className="info-roles">
					<ul>
						{currentUser.roles &&
							currentUser.roles.map((role, index) => (
								<li key={index}>{role}</li>
							))}
					</ul>
				</div>
			</StyledInformation>
		</StyledContainer>
	);
};

const StyledContainer = styled.div`
	display: flex;
	justify-content: center;

	margin-top: 5%;
	width: 80%;

	h1 {
		margin: 10%;
	}
`;

const StyledInformation = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;

	h2 {
		font-size: 1.2rem;
		margin-top: 0.8rem;
	}

	h3 {
		font-size: 1rem;
	}

	p {
		font-size: 1rem;
		margin-top: 1.2rem;
	}

	ul li {
		list-style-type: none;
		font-size: 0.9rem;
		margin-top: 0.8rem;
		padding-bottom: 0.5rem;
	}

	.info-account,
	.info-user,
	.info-address,
	.info-roles {
		display: flex;
		flex-direction: row;
		padding: 0.2rem;
		border-bottom: 1px solid rgba(79, 79, 79, 35%);
	}

	@media (max-width: 768px) {
		.info-account,
		.info-user,
		.info-address,
		.info-roles {
			flex-direction: column;
		}
	}
`;

export default Account;
