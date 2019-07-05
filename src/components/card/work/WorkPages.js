import React from "react";

const WorkPages = () => {
	return (
		<div style={{ marginTop: "10%" }}>
			<div
				style={{
					background: "white",
					opacity: "0.8",
					marginLeft: "12%",
					marginTop: "5%",
					textAlign: "center",
					width: "1100px",
					height: "500px",
					borderRadius: "5%",
					border: "7px solid black"
				}}
			>
				<h1
					style={{
						marginTop: "10%",
						marginLeft: "12%",
						marginRight: "12%",
						marginBottom: "5%",
						color: "black",
						fontFamily: "DIN Condensed",
						fontSize: "3rem"
					}}
				>
					We partner with clients who, like us, raise the bar on what good content
					looks like.
				</h1>
				<img
					style={{ width: "200px", height: "100px" }}
					src="https://octivo.io/wp-content/uploads/2018/07/cotton-on-logo.svg"
					alt="cottonOn"
				/>
				<img
					style={{ width: "200px", height: "100px" }}
					src="https://octivo.io/wp-content/uploads/2018/07/typo-logo.svg"
					alt="cottonOn"
				/>
				<img
					style={{ width: "200px", height: "100px" }}
					src="https://octivo.io/wp-content/uploads/2018/07/grilld-logo.svg"
					alt="cottonOn"
				/>
				<img
					style={{ width: "200px", height: "100px" }}
					src="https://octivo.io/wp-content/uploads/2018/12/maurafay_neon.png"
					alt="cottonOn"
				/>
				<img
					style={{ width: "200px", height: "100px" }}
					src="https://octivo.io/wp-content/uploads/2018/07/telstra-logo.svg"
					alt="cottonOn"
				/>
			</div>
		</div>
	);
};

export default WorkPages;
