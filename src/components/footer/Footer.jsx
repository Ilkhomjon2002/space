import React from "react";
import "./footer.css";
import {
	FaFacebook,
	FaLinkedin,
	FaMailBulk,
	FaPhone,
	FaSearchLocation,
	FaTwitter,
} from "react-icons/fa";
const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-container">
				<div className="left">
					<div className="location">
						<FaSearchLocation
							size={20}
							style={{ color: "#ffffff", marginRight: "2rem" }}
						></FaSearchLocation>
						<div>
							<p>123Acme St.</p>
							<h4>Houston,Tx</h4>
						</div>
					</div>
					<div className="phone">
						<h4>
							<FaPhone
								size={20}
								style={{ color: "#ffffff", marginRight: "2rem" }}
							/>
							1-800-123-1234
						</h4>
					</div>
					<div className="email">
						<h4>
							<FaMailBulk
								size={20}
								style={{ color: "#ffffff", marginRight: "2rem" }}
							/>
							trips@galaxy.com
						</h4>
					</div>
				</div>
				<div className="right">
					<h4>About the company</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
						corporis eum enim eveniet dolorum minus quidem voluptatum nostrum
						veniam totam!
					</p>
					<div className="social">
						<FaFacebook
							size={30}
							style={{ color: "#ffffff", marginRight: "1rem" }}
						></FaFacebook>
						<FaTwitter
							size={30}
							style={{ color: "#ffffff", marginRight: "1rem" }}
						></FaTwitter>
						<FaLinkedin
							size={30}
							style={{ color: "#ffffff", marginRight: "1rem" }}
						></FaLinkedin>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
