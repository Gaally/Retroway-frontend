import React from "react";
import emailjs from "emailjs-com";

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
		<div className="contact-form">
			<form onSubmit={sendEmail}>
				<label>Name</label>
				<input type="text" name="name" placeholder="Name" />
				<label>Email</label>
				<input type="email" name="email" placeholder="Email" />
				<label>Message</label>
				<textarea name="message" placeholder="Your Message" />
				<input type="submit" value="Send Message" />
			</form>
		</div>
	);
};

export default ContactForm;
