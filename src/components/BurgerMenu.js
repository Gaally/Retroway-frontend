import React, { useState } from "react";
import styled from "styled-components";
import Nav from "./Nav";

const BurgerMenu = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<StyledBurger open={open} onClick={() => setOpen(!open)}></StyledBurger>
			<Nav open={open} />
		</>
	);
};

const StyledBurger = styled.div`
	width: 2rem;
	height: 2rem;
	position: fixed;
	top: 15px;
	right: 20px;
	z-index: 20;
	display: none;

	@media (max-width: 768px) {
		display: flex;
		justify-content: space-around;
		flex-flow: column nowrap;
	}
`;

export default BurgerMenu;
