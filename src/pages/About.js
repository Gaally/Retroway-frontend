import React from "react";
import styled from "styled-components";

const About = () => {
	return (
		<StyledAbout>
			<h1>about us</h1>
			<p>
				Retroway is a company located in France. We are passionate about vintage
				motorcycles and gladly call it our career as well. Classic Motorcycle,
				is a byword for high-quality vintage motorcycles and we aim for
				satisfied customers with steady confidence in our services and products.
			</p>
		</StyledAbout>
	);
};

const StyledAbout = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 5%;
	width: 80%;
	padding: 0.5rem;

	h1 {
		margin: 10%;
	}

	p {
		padding: 5rem 1rem 1rem 1rem;
		width: 60%;
	}

	@media (max-width: 768px) {
		width: 100%;

		h1 {
			text-align: center;
		}

		p {
			width: 100%;
		}
	}
`;

export default About;
