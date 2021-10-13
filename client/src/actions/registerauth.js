import React from "react";
import { useHistory } from "react-router";

const siteUrl = `http://localhost:3000`
const serverUrl = `http://localhost:8000`

const Login = () => {
    let history = useHistory();

const register = () => {
    history.push("/profilesetup");
  };


async function requestRegistration(e) {
	e.preventDefault();
	try {
		const options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				username: e.target.username.value,
				email: e.target.email.value,
				password: e.target.password.value
			})
		};
		console.log(e.target.username.value);
		console.log(e.target.email.value);
		console.log(e.target.password.value);
		const r = await fetch(
			`${serverUrl}/registration`,
			options
		);
		const data = await r.json();
		if (data.err) {
			throw Error(data.err);
			return;
		}
		register();
	} catch (err) {
		console.warn(err);
	}
}


module.exports = { requestRegistration };
