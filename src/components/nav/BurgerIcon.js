import React from "react";
import Navbar from "react-bootstrap/Navbar";

export default ({ open, ...props }) => (
	<>
		<div className={open ? "burger-menu open" : "burger-menu"} {...props}>
			<img
				src="https://octivo.io/wp-content/uploads/2018/05/octivo-logo.svg"
				className="header-left"
				style={{
					position: "fixed",
					top: "6rem",
					left: "0.8rem"
				}}
			/>

			<div className="bar1" key="b1" />
			<div className="bar2" key="b2" />
			<div className="bar3" key="b3" />
		</div>
	</>
);
