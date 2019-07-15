import React from "react";
import { Transition, animated } from "react-spring";
import "../styles/Projects.scss";
import Grilled from "./images/grilled.png";
import CottonOn from "./images/CottonOn.png";
import Mfl from "./images/Mfl.png";

const pages = [
	({ style }) => (
		<animated.div style={{ ...style, display: "flex", justifyContent: "center" }}>
			<img
				style={{ width: "90%", border: "3px solid black", borderRadius: "3%" }}
				src={Grilled}
				alt="grilled"
			/>
		</animated.div>
	),
	({ style }) => (
		<animated.div style={{ ...style, display: "flex", justifyContent: "center" }}>
			<img
				style={{ width: "90%", border: "3px solid black", borderRadius: "3%" }}
				src={Mfl}
				alt="mlf"
			/>
		</animated.div>
	),
	({ style }) => (
		<animated.div style={{ ...style, display: "flex", justifyContent: "center" }}>
			<img
				style={{ width: "90%", border: "3px solid black", borderRadius: "3%" }}
				src={CottonOn}
				alt="cottonon"
			/>
		</animated.div>
	)
];

export default class Projects extends React.PureComponent {
	state = { index: 0 };
	toggle = e =>
		this.setState(state => ({
			index: state.index === 2 ? 0 : state.index + 1
		}));
	render() {
		return (
			<>
				<div className="projects" onClick={this.toggle}>
					<Transition
						native
						reset
						unique
						items={this.state.index}
						from={{ opacity: 0, transform: "translate3d(100%,0,0)" }}
						enter={{ opacity: 1, transform: "translate3d(0%,0,0)" }}
						leave={{ opacity: 0, transform: "translate3d(-50%,0,0)" }}
					>
						{(index, state) => props => {
							const Page = pages[index];
							return <Page style={props} />;
						}}
					</Transition>
				</div>
			</>
		);
	}
}
