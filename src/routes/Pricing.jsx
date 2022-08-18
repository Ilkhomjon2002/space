import React from "react";
import Footer from "../components/footer/Footer";
import HeroImage from "../components/heroimg/Heroimg";
import Navbar from "../components/navbar/Navbar";
import PricingComponent from "../components/pricing/pricing";
const Pricing = () => {
	return (
		<div>
			<Navbar />
			<HeroImage heading="PRICING." text="Choose your trip." />
			<PricingComponent />
			<Footer />
		</div>
	);
};

export default Pricing;
