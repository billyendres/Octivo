import ReactDOM from "react-dom";
import React from "react";
import { useSpring, animated } from "react-spring";
import range from "lodash-es/range";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import blog from "./images/blog.png";

import "./Carousel.css";

export default function Carousel() {
	return (
		<div>
			<img src={blog} style={{ width: "80%", marginLeft: "10%", marginTop: '5rem', border: '4px solid black' }} />
			<div className="carousel" style={{ display: "flex" }}>
				<img src={img1} className="script-bf-box" />
				<img src={img2} className="script-bf-box" />
				<img src={img3} className="script-bf-box" />
				<img src={img4} className="script-bf-box" />
			</div>
		</div>
	);
}
