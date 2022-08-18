import React from "react";
import Footer from "../components/footer/Footer";
import HeroImage from "../components/heroimg/Heroimg";
import Navbar from "../components/navbar/Navbar";
import TrainingComponent from "../components/training/Training";

const Training = () => {
	return (
		<div>
			<Navbar></Navbar>
			<HeroImage heading="Training." text="Pre-Flight & In-Flight Training." />
			<TrainingComponent />
			<Footer />
		</div>
	);
};

export default Training;
