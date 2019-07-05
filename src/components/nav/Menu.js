import React from "react";

export default ({ close }) => (
	<div className="menu">
		<ul style={{ fontSize: "2.5rem", fontFamily: "GT Walsheim" }}>
			<li onClick={close}>Home</li>
			<li onClick={close}>Enquire Now</li>
			<li onClick={close}>Octivo Authoring Tool</li>
			<li onClick={close}>Our Story</li>
			<li onClick={close}>Our Work</li>
			<li onClick={close}>Our Media</li>
			<li onClick={close}>Get In Touch</li>
		</ul>
	</div>
);
