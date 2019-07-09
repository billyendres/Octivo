import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
	return (
		<div className="footer">
			<img
				className="footer-octivo"
				src="https://octivo.io/wp-content/uploads/2018/05/octivo-logo.svg"
				alt="Octivo"
			/>
			<div className="footer-text">
				Stay up to date with the Octivo Magic... <br />
				Follow us on social media{" "}
			</div>
			<img
				className="footer-img"
				src="https://octivo.io/wp-content/uploads/2018/10/icon-in-purp.svg"
				alt="LinkedIn"
			/>
			<img
				className="footer-img"
				src="https://octivo.io/wp-content/uploads/2018/10/icon-fb-purp.svg"
				alt="Facebook"
			/>
			<img
				className="footer-img"
				src="https://octivo.io/wp-content/uploads/2018/10/icon-ig-purp.svg"
				alt="Instagram"
			/>
		</div>
	);
};

export default Footer;
