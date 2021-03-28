import React from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";

const ContactForm = () => {
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_8bvnauo",
				"template_pwgirvj",
				e.target,
				"user_ET94G8gv4AoO9tvEMaODN",
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				},
			);
		e.target.reset();
	};
	return (
		<StyledContactForm>
			<h1>contact us</h1>

			<form onSubmit={sendEmail}>
				<p>
					if you would like to contact us, please send a message via the contact
					form
				</p>
				<label>Name</label>
				<input type="text" name="name" />
				<label>Email</label>
				<input type="text" name="email" />
				<label>Message</label>
				<textarea name="message" />
				<input className="submit" type="submit" value="Send Message" />
			</form>
		</StyledContactForm>
	);
};

const StyledContactForm = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 5%;
	width: 80%;
	padding: 0.5rem;

	h1 {
		margin: 10%;
	}

	p {
		padding: 1rem;
	}
	form {
		width: 60%;
		padding: 5% 5%;

		label {
			letter-spacing: 2px;
			padding-top: 0.5rem;
		}

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

			&:focus {
				border: none;
			}
		}

		textarea {
			width: 100%;
			min-height: 50px;
			border: 0;
			font-size: 1rem;
			padding: 0.2rem;
			margin: 5px;
			border-radius: 4px;
			color: #f5f5fa;
			resize: none;
			outline: none;
			border: none;
			background-color: rgba(79, 79, 79, 35%);
		}

		.submit {
			width: 35%;
			margin: 1.2rem;
			font-size: 1rem;
			font-weight: bold;
			border: none;
			outline: none;
			cursor: pointer;
			background: #283c5e;
			color: #f5f5fa;
			text-decoration: none;
		}

		@media (max-width: 768px) {
			input {
				width: 50%;
			}

			textarea {
				width: 50%;
			}

			.submit {
				width: 25%;
			}
		}
	}
`;

export default ContactForm;
