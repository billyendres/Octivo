import React, { useState, useRef } from "react";
import { useSpring, animated } from "react-spring";
import "../styles/Card.scss";

const CardItems = () => {
	return (
		<div>
			<Hero>
				<div className="container">
					<Info />
					<div className="row">
						{cards.map((card, i) => (
							<div className="column">
								<Card>
									<div className="card-title">{card.title}</div>
									<div className="card-body">{card.description}</div>
									<div
										style={{
											width: "100px",
											height: "100px",
											borderRadius: "50%",
											background: "black"
										}}
									>
										<img
											src="https://octivo.io/wp-content/uploads/2018/10/2-apps.png"
											style={{ height: "110px", height: "110px", paddingTop: "20px" }}
										/>
									</div>
								</Card>
							</div>
						))}
					</div>
				</div>
			</Hero>
		</div>
	);
};

export default CardItems;

function Card({ children }) {
	// We add this ref to card element and use in onMouseMove event ...
	// ... to get element's offset and dimensions.
	const ref = useRef();

	// Keep track of whether card is hovered so we can increment ...
	// ... zIndex to ensure it shows up above other cards when animation causes overlap.
	const [isHovered, setHovered] = useState(false);

	const [animatedProps, setAnimatedProps] = useSpring({
		// Array containing [rotateX, rotateY, and scale] values.
		// We store under a single key (xys) instead of separate keys ...
		// ... so that we can use animatedProps.xys.interpolate() to ...
		// ... easily generate the css transform value below.
		xys: [0, 0, 1],
		// Setup physics
		config: { mass: 10, tension: 400, friction: 30, precision: 0.00001 }
	});

	return (
		<animated.div
			ref={ref}
			className="card"
			onMouseEnter={() => setHovered(true)}
			onMouseMove={({ clientX, clientY }) => {
				// Get mouse x position within card
				const x =
					clientX -
					(ref.current.offsetLeft -
						(window.scrollX || window.pageXOffset || document.body.scrollLeft));

				// Get mouse y position within card
				const y =
					clientY -
					(ref.current.offsetTop -
						(window.scrollY || window.pageYOffset || document.body.scrollTop));

				// Set animated values based on mouse position and card dimensions
				const dampen = 50; // Lower the number the less rotation
				const xys = [
					-(y - ref.current.clientHeight / 2) / dampen, // rotateX
					(x - ref.current.clientWidth / 2) / dampen, // rotateY
					1.07 // Scale
				];

				// Update values to animate to
				setAnimatedProps({ xys: xys });
			}}
			onMouseLeave={() => {
				setHovered(false);
				// Set xys back to original
				setAnimatedProps({ xys: [0, 0, 1] });
			}}
			style={{
				// If hovered we want it to overlap other cards when it scales up
				zIndex: isHovered ? 2 : 1,
				// Interpolate function to handle css changes
				transform: animatedProps.xys.interpolate(
					(x, y, s) =>
						`perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
				)
			}}
		>
			{children}
		</animated.div>
	);
}

function Hero({ children }) {
	return (
		<div className="hero">
			<div>{children}</div>
		</div>
	);
}

function Info() {
	return (
		<div className="info" style={{ fontSize: "3rem" }}>
			GET IN TOUCH!
			<br />
			<img
				style={{
					width: "40px",
					height: "40px",
					marginRight: "10px",
					marginBottom: "10px"
				}}
				src="https://octivo.io/wp-content/uploads/2018/12/phone-icon.svg"
			/>
			1300 166 010
		</div>
	);
}

const cards = [
	{
		title: "Custom Content",
		description:
			"Custom developed with brand at heart that delivers real results, every time"
	},
	{
		title: "Apps & Web Marketing",
		description:
			"We are tech geeks with a creatve soul. Partnering with Ocitvo means you will never get anything off the shelf"
	},
	{
		title: "Learning Systems",
		description:
			"Brining back interactivity with learning, so beautiful is award winning."
	}
];
