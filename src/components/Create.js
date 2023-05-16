import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create() {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [email, setEmail] = useState("");
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("https://64636bbf7a9eead6fae64ba0.mockapi.io/crud", {
				e_name: name,
				e_age: age,
				e_email: email,
			})
			.then(() => {
				navigate("/");
			})
			.catch(() => {
				alert("Error has been occured");
			});
	};
	return (
		<>
			<div className="row justify-content-md-center my-3	">
				<div className="col-md-5 ">
					<div className="mb-2 mt-2">
						<Link to="/">
							<button className="btn btn-primary">Read Data</button>
						</Link>
					</div>
					<div className="bg-primary p-4 text-center">
						<h1>Create Data</h1>
					</div>
					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<label>Enter Name: </label>
							<input
								type="text"
								placeholder="Name"
								className="form-control"
								onChange={(e) => setName(e.target.value)}
								required
							/>
						</div>
						<div className="form-group">
							<label>Enter Age: </label>
							<input
								type="number"
								placeholder="Age"
								className="form-control"
								onChange={(e) => setAge(e.target.value)}
								required
							/>
						</div>
						<div className="form-group">
							<label>Enter Email: </label>
							<input
								type="email"
								placeholder="Email"
								className="form-control"
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<br />
						<div className="d-grid">
							<input type="submit" value="submit" className="btn btn-primary" />
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default Create;
