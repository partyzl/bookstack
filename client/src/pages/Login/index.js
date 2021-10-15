import React from "react";
import { useHistory } from "react-router";
import { Button } from "../../components";
// import { Header } from "../../../layout";
import "./styles.css";
import jwt_decode from "jwt-decode";
import { login } from "../../actions/loginauth";

const Login = () => {
  let history = useHistory();

  const register = () => {
    history.push("/register");
  };

  const siteUrl = `http://localhost:3000`;
  const deployedServerUrl = `https://bookstack-heroku-app.herokuapp.com`;
  const localServerUrl = "http://localhost:8000";

  async function requestLogin(e) {
    e.preventDefault();
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: e.target.form.username.value,
          password: e.target.form.password.value,
        }),
      };
      const resp = await fetch(`${deployedServerUrl}/login/`, options);
      const data = await resp.json();

 
      if (resp.status == 400) {
        throw new Error("Login not authorised");
      }

      
      login(data.token, e.target.form.username.value );

    } catch (err) {
      console.warn(err);
    }
  }
  // will make this consider auth when we link to backend
  // something along the lines of
  // let element= state? <a href={url}>LinkedIn handle</a> : <p>No handle exists for this user!</p>;

  return (
    <div className="body">
      {/* <Header /> */}

      <p className="title">
        <span className="color1">L</span>
        <span className="color2">o</span>
        <span className="color3">g</span>
        <span className="color4">i</span>
        <span className="color1">n</span>
        
      </p>

      <form>
        <input
          type="text"
          placeholder="Enter username"
          id="username"
          name="username"
        />


        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />
        <Button
          type="submit"
          className={"btn btn-light col-sm-2 mb-3"}
          // onClick={profilelanding}
          onClick={requestLogin}
        >
          Login
        </Button>
      </form>
      
        <p>Don't have an account?</p>
        <div class="container">
          <Button
            type="button"
            className={"fix btn btn-light col-sm-2 mb-3"}
            id="register"
            onClick={register}
          >
            Register
          </Button>
        </div>
      </div>

  );
};

export default Login;
