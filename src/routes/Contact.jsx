import React from "react";
import Footer from "../components/footer/Footer";
import Form from "../components/form/Form";
import HeroImage from "../components/heroimg/Heroimg";
import Navbar from "../components/navbar/Navbar";
const Contact = () => {
	return (
		<div>
			<Navbar></Navbar>
			<HeroImage heading="Contact." text="Contact GLX Travel."></HeroImage>
			<Form></Form>
			<Footer></Footer>
		</div>
	);
};

export default Contact;
