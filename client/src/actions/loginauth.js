import React from "react";
import { useHistory } from "react-router";

const siteUrl = `http://localhost:3000`
const serverUrl = `http://localhost:8000`

const Login = () => {
    let history = useHistory();

const profilelanding = () => {
    history.push("/profilelanding");
  };

async function requestLogin(e) {
	e.preventDefault();
	try {
		const options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email: e.target.email.value,
				password: e.target.password.value
			})
		};
		const r = await fetch(
			`${serverUrl}/login`,
			options
		);
		const data = await r.json();
		console.log("data", data);
		if (!data.success) {
			throw new Error("Login not authorised");
		}
		login(data.token);
	} catch (err) {
		console.warn(err);
	}
}

function login(token) {
	const user = jwt_decode(token);
	localStorage.setItem("token", token);
	localStorage.setItem("username", user.username);
	localStorage.setItem("email", user.email);
	localStorage.setItem("id", user.id);
	profilelanding();

module.exports = { requestLogin };