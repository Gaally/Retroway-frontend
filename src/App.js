import React from "react";
// Components & Pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Details from "./pages/Details";
import About from "./pages/About";
import Account from "./pages/Account";
import BoardAdmin from "./components/BoardAdmin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Profile from "./components/Profile";

import GlobalStyles from "./components/GlobalStyles";
// Router
import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<Nav />
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/shop" exact>
					<Shop />
				</Route>
				<Route path="/about" exact>
					<About />
				</Route>
				<Route path="/contact" exact>
					<Contact />
				</Route>
				<Route path="/login" exact>
					<Login />
				</Route>
				<Route path="/register" exact>
					<Register />
				</Route>
				<Route path="/profile" exact>
					<Profile />
				</Route>
				<Route path="/account" exact>
					<Account />
				</Route>
				<Route path="/admin" exact>
					<BoardAdmin />
				</Route>
				<Route path="/cart" exact>
					<Cart />
				</Route>
				<Route path="/:id" exact>
					<Details />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
