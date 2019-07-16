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
				<Carousel.Caption>
					<h3>Youtube Clone</h3>
					<a
						style={{ color: "white" }}
						href="https://billyendres.github.io/React-Mini-Youtube/"
						alt="youtubeClone"
						rel="noopener noreferrer"
						target="_blank"
					>
						GitHub Pages Link
					</a>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<img className="d-block w-100" src={CottonOn} alt="slide" />
				<Carousel.Caption>
					<h3>Travel Page React JSON Import</h3>
					<a
						style={{ color: "white" }}
						href="https://billyendres.github.io/Flight-Centre/"
						alt="youtubeClone"
						rel="noopener noreferrer"
						target="_blank"
					>
						GitHub Pages Link
					</a>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<img className="d-block w-100" src={Mfl} alt="slide" />
				<Carousel.Caption>
					<h3>React Mountains App</h3>
					<a
						style={{ color: "white" }}
						href="https://billyendres.github.io/React-Mountains-Project/"
						alt="mountains"
						rel="noopener noreferrer"
						target="_blank"
					>
						GitHub Pages Link
					</a>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Projects;
