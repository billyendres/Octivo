import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import ReactParticles from "react-particles-js";
import particlesConfig from "../particles-config.js";
import "../Card.scss";
import WorkPages from "./WorkPages.js";

const Banner = () => {
	return (
		<div className="main">
			<Particles />
		</div>
	);
};

function Particles() {
	return (
		<div style={{ position: "relative" }}>
			<ReactParticles
				params={particlesConfig}
				style={{
					position: "absolute",
					zIndex: 1,
					left: 0,
					right: 0,
					bottom: 0,
					top: 0
				}}
			/>{" "}
			<WorkPages />
		</div>
	);
}

export default Banner;
