import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { apply, Canvas, useRender, useThree } from "react-three-fiber";
import { useSprings, a } from "@react-spring/three";
import * as resources from "./animationResources/index";
import "../styles/HomePage.scss";
import Flip from "react-reveal/Flip";
apply(resources);

const number = 30;
const colors = ["#A2CCB6", "#FCEEB5", "#EE786E", "#e0feff"];
const random = () => {
	const r = Math.random();
	return {
		position: [30 - Math.random() * 60, 30 - Math.random() * 60, 0],
		color: colors[Math.round(Math.random() * (colors.length - 1))],
		scale: [1 + r * 10, 1 + r * 10, 1],
		rotation: [0, 0, THREE.Math.degToRad(Math.round(Math.random()) * 45)]
	};
};

const Content = () => {
	const { viewport } = useThree();
	const aspect = viewport.width / 6;
	const [springs, set] = useSprings(number, i => ({
		from: random(),
		...random(),
		config: { mass: 20, tension: 500, friction: 200 }
	}));
	useEffect(
		() =>
			void setInterval(() => set(i => ({ ...random(), delay: i * 50 })), 4000),
		[]
	);
	return springs.map(({ color, ...props }, index) => (
		<a.mesh key={index} {...props}>
			<planeBufferGeometry
				attach="geometry"
				args={[0.1 + Math.random() * aspect, 0.1 + Math.random() * aspect]}
			/>
			<a.meshPhongMaterial attach="material" color={color} />
		</a.mesh>
	));
};

const Effect = () => {
	const composer = useRef();
	const { scene, gl, size, camera } = useThree();
	useEffect(() => void composer.current.setSize(size.width, size.height), [
		size
	]);
	useRender(() => composer.current.render(), true);
	return (
		<effectComposer ref={composer} args={[gl]}>
			<renderPass attachArray="passes" scene={scene} camera={camera} />
			<waterPass attachArray="passes" factor={1} />
			<shaderPass
				attachArray="passes"
				args={[resources.FXAAShader]}
				material-uniforms-resolution-value={[1 / size.width, 1 / size.height]}
				renderToScreen
			/>
		</effectComposer>
	);
};

const HomePage = () => {
	return (
		<div style={{ color: "#172717", height: "100vh" }}>
			<Canvas style={{ background: "#A2CCB6" }} camera={{ position: [0, 0, 30] }}>
				<ambientLight intensity={0.5} />
				<spotLight intensity={0.5} position={[300, 300, 4000]} />
				<Effect />
				<Content />
			</Canvas>
			<div className="headers">
				<Flip>
					<div className="header-small">WE MAKE YOUR DESIGNS....</div>
					<div className="header-major">
						<span>Beautiful, Useable & Fun</span>
					</div>
				</Flip>
			</div>
		</div>
	);
};

export default HomePage;
