import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => {
		setClick(!click);
	};
	const [color, setColor] = useState(false);
	const changeColor = () => {
		if (window.scrollY >= 100) {
			setColor(true);
		} else {
			setColor(false);
		}
	};
	window.addEventListener("scroll", changeColor);
	return (
		<div className={color ? "header-bg header" : "header"}>
			<Link to={"/"}>
				<h1>GLX TRVL</h1>
			</Link>
			<ul className={click ? "nav-menu active" : "nav-menu"}>
				<li>
					<Link to={"/"}>Home</Link>
				</li>
				<li>
					<Link to={"/pricing"}>Pricing</Link>
				</li>
				<li>
					<Link to={"/training"}>Training</Link>
				</li>
				<li>
					<Link to={"/contact"}>Contact</Link>
				</li>
			</ul>
			<div className="hamburger" onClick={handleClick}>
				{click ? (
					<FaTimes style={{ color: "#fff" }} size={20} />
				) : (
					<FaBars style={{ color: "#fff" }} size={20} />
				)}
			</div>
		</div>
	);
};

export default Navbar;
