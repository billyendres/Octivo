import React from "react";
import "../styles/Clients.scss";

const Clients = () => {
	return (
		<div className="clients-bg">
			<div className="clients">
				<h1 className="clients-header">
					We partner with clients who, like us, raise the bar on what good content
					looks like.
				</h1>
				<img
					className="clients-image"
					src="https://octivo.io/wp-content/uploads/2018/07/cotton-on-logo.svg"
					alt="cottonOn"
				/>
				<img
					className="clients-image"
					src="https://octivo.io/wp-content/uploads/2018/07/typo-logo.svg"
					alt="cottonOn"
				/>
				<img
					className="clients-image"
					src="https://octivo.io/wp-content/uploads/2018/07/grilld-logo.svg"
					alt="cottonOn"
				/>
				<img
					className="clients-image"
					src="https://octivo.io/wp-content/uploads/2018/12/maurafay_neon.png"
					alt="cottonOn"
				/>
				<img
					className="clients-image"
					src="https://octivo.io/wp-content/uploads/2018/07/telstra-logo.svg"
					alt="cottonOn"
				/>
			</div>
		</div>
	);
};

export default Clients;
