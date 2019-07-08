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
			{/* <div style={{ width: "100%", background: "black", padding: "56px" }} /> */}
			<HomePage />
			{/* <div style={{ width: "100%", background: "black", padding: "20px" }} /> */}
			<CardItems />
			{/* <div style={{ width: "100%", background: "black", padding: "140px" }} /> */}
			<Blog />
			{/* <div style={{ width: "100%", background: "black", padding: "20px" }} /> */}
			<Clients />
			<Footer />
		</Fragment>
	);
};

export default App;
