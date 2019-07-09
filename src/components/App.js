import React, { Fragment } from "react";
import Nav from "./nav/Nav";
import HomePage from "./HomePage";
import CardItems from "./Card";
import Blog from "./Blog";
import Clients from "./Clients";
import Footer from "./Footer";

const App = () => {
	return (
		<Fragment>
			<Nav />
			<div style={{ width: "100%", background: "black", padding: "56px" }} />
			<HomePage />
			<div style={{ width: "100%", background: "black", padding: "5px" }} />
			<CardItems />
			<Blog />
			<Clients />
			<Footer />
		</Fragment>
	);
};

export default App;
