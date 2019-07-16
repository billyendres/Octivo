import React, { Component } from "react";
import "../styles/Blog.scss";
// import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";

class Blog extends Component {
	render() {
		return (
			<>
				<div className="background-style">
					<Fade top>
						<div className="blog-style">
							{/* <Flip> */}
							<div className="blogs">- BLOGS -</div>
							{/* </Flip> */}
						</div>
					</Fade>
					<Zoom>
						<div className="blog-images">
							<img src={img1} alt="img1" className="image-container" />
							<img src={img2} alt="img2" className="image-container" />
							<img src={img3} alt="img3" className="image-container" />
							<img src={img4} alt="img4" className="image-container" />
						</div>
					</Zoom>
				</div>
			</>
		);
	}
}

export default Blog;
