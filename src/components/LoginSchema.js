import React from "react";
import * as Yup from "yup";

export default Yup.object().shape({
	password: Yup.string()
		.min(2, "Too Short !")
		.max(50, "Too Long !")
		.required("Required"),
	username: Yup.string().username("Invalid username").required("Required"),
});
