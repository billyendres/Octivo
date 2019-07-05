import React from "react";

const Footer = () => {
	return (
		<div
			style={{
				width: "100%",
				background: "black",
				padding: "13%",
				textAlign: "center"
			}}
		>
			<img
				style={{ width: "300px", marginBottom: "50px" }}
				src="https://octivo.io/wp-content/uploads/2018/05/octivo-logo.svg"
				alt="Octivo"
			/>
			<div style={{ color: "white", fontSize: "2rem", marginBottom: "50px" }}>
				Stay up to date with the Octivo Magic... <br />
				Follow us on social media{" "}
			</div>
			<img
				style={{ width: "70px", marginRight: "20px" }}
				src="https://octivo.io/wp-content/uploads/2018/10/icon-in-purp.svg"
				alt="LinkedIn"
			/>
			<img
				style={{ width: "70px", marginRight: "20px" }}
				src="https://octivo.io/wp-content/uploads/2018/10/icon-fb-purp.svg"
				alt="Facebook"
			/>
			<img
				style={{ width: "70px" }}
				src="https://octivo.io/wp-content/uploads/2018/10/icon-ig-purp.svg"
				alt="Instagram"
			/>
		</div>
	);
};

export default Footer;
