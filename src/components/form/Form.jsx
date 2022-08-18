import React from "react";
import "./form.css";
const Form = () => {
	return (
		<div className="form">
			<form>
				<label>Your name</label>
				<input type="text" />
				<label>Email</label>
				<input type="email" />
				<label>Subject</label>
				<input type="text" />
				<textarea rows="6" placeholder="Type a short message"></textarea>
				<button className="btn">Submit</button>
			</form>
		</div>
	);
};

export default Form;
