import React, { Fragment } from "react";
import HomePage from "./HomePage";
import CardItems from "./card/Card";
import Banner from "./card/Banner";
import Work from "./card/work/Work";
import Carousel from "./carousel/Carousel";
import Footer from "./bottomNav/Footer.js";

const App = () => {
	return (
		<Fragment>
			<div style={{ width: "100%", background: "black", padding: "56px" }} />
			<HomePage />
			<div style={{ width: "100%", background: "black", padding: "20px" }} />
			<CardItems />
			<div style={{ width: "100%", background: "black", padding: "140px" }} />
			<Banner />
			<div style={{ width: "100%", background: "black", padding: "20px" }} />
			<Work />
			<Footer />
		</Fragment>
	);
};

export default App;
