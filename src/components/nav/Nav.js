import React from "react";
import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import Menu from "./Menu";
import "./nav.css";

const contentStyle = {
	background: "rgba(255,255,255,0)",
	width: "80%",
	border: "none"
};

const Nav = () => {
	return (
		<Popup
			modal
			overlayStyle={{ background: "rgba(255,255,255,0.98", opacity: "0.9" }}
			contentStyle={contentStyle}
			closeOnDocumentClick={false}
			trigger={open => <BurgerIcon open={open} />}
		>
			{close => <Menu close={close} />}
		</Popup>
	);
};

export default Nav;
