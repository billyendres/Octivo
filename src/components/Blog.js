import React from "react";
import "../styles/Blog.scss";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";

const Blog = () => {
	return (
		<div className="background-style">
			<div className="blog-style">
				<div className="blogs">- BLOGS -</div>
			</div>
			<div className="blog-images">
				<img src={img1} alt="img1" className="image-container" />
				<img src={img2} alt="img2" className="image-container" />
				<img src={img3} alt="img3" className="image-container" />
				<img src={img4} alt="img4" className="image-container" />
			</div>
		</div>
	);
};

export default Blog;
