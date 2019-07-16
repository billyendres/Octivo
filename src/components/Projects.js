import React from "react";
import { Transition, animated } from "react-spring";
import "../styles/Projects.scss";
import Carousel from "react-bootstrap/Carousel";
import Grilled from "./images/grilled.png";
import CottonOn from "./images/CottonOn.png";
import Mfl from "./images/Mfl.png";

const Projects = () => {
	return (
		<Carousel className="carousel" style={{ border: "1em solid black" }}>
			<Carousel.Item>
				<img className="d-block w-100" src={Grilled} alt="slide" />
			</Carousel.Item>

			<Carousel.Item>
				<img className="d-block w-100" src={CottonOn} alt="slide" />
			</Carousel.Item>

			<Carousel.Item>
				<img className="d-block w-100" src={Mfl} alt="slide" />
			</Carousel.Item>
		</Carousel>
	);
};

export default Projects;
