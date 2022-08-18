import React from "react";
import Pod from "../../assets/pod.jpg";
import Moon from "../../assets/moon.jpg";
import { Link } from "react-router-dom";
import "./training.css";
const TrainingComponent = () => {
	return (
		<div className="training">
			<div className="left">
				<h1>Training</h1>
				<p>
					Through training it is a necessity when traveling to space. We offer
					all inclusive training for pre-flight and in-flight scenarios.
				</p>
				<Link to={"/contact"}>
					<button className="btn">Contact</button>
				</Link>
			</div>
			<div className="right">
				<div className="img-container">
					<div className="image-stack top">
						<img src={Moon} className="img" alt="moon" />
					</div>
					<div className="image-stack bottom">
						<img src={Pod} className="img" alt="pod" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TrainingComponent;
