import React from "react";
import "../styles/Blog.scss";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import blog from "./images/blog.png";

const Blog = () => {
	return (
		<div className="background-style">
			<div className="blog-style">
				{/* <img className="blog-banner" src={blog} /> */}
			</div>
			<div className="blog-images">
				<img src={img1} className="image-container" />
				<img src={img2} className="image-container" />
				<img src={img3} className="image-container" />
				<img src={img4} className="image-container" />
			</div>
		</div>
	);
};

export default Blog;
