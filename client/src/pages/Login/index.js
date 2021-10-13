import React from "react";
import { useHistory } from "react-router";
import { Button } from "../../components";
// import { Header } from "../../../layout";
import "./styles.css";
import jwt_decode from 'jwt-decode';

const Login = () => {
  let history = useHistory();

  const profilelanding = () => {
    history.push("/profilelanding");
  };

  const register = () => {
    history.push("/register");
  };

  const siteUrl = `http://localhost:3000`
  const serverUrl = `http://localhost:8000`


  async function requestLogin(e) {
    e.preventDefault();
    console.log(e)
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: e.target.form.username.value,
          password: e.target.form.password.value
        })
      };
      const r = await fetch(
        `${serverUrl}/login/`,
        options
      );
      const data = await r.json();
      console.log("data", data);
      if (!data.success) {
        throw new Error("Login not authorised");
      }
      console.log("Logging in")
      // login(data.token);
    } catch (err) {
      console.warn(err);
    }
  }

  function login(token) {
    const user = jwt_decode(token);
    localStorage.setItem("token", token);
    localStorage.setItem("username", user.username);
    // localStorage.setItem("email", user.email);
    // localStorage.setItem("id", user.id);
    profilelanding();
  }
  // will make this consider auth when we link to backend
  // something along the lines of
  // let element= state? <a href={url}>LinkedIn handle</a> : <p>No handle exists for this user!</p>;

  return (
    <div className="body">
      {/* <Header /> */}
      <form>
        <input type="text" placeholder="Enter username" id="username" name="username" />
        <br />
        {/* <input type="text" placeholder="Enter email" name="email" />
        <br /> */}
        <input type="password" placeholder="Password" id="password" name="password" />
        <Button
          type="submit"
          className={"btn btn-light col-sm-2 mb-3"}
          // onClick={profilelanding}
          onClick={requestLogin}
        >
          Login
        </Button>
      </form>
      <Button
        type="button"
        className={"btn btn-light col-sm-2 mb-3"}
        onClick={register}
      >
        Register
      </Button>
      <p>Don't have an account? Why not register here!</p>
    </div>
  );
};

export default Login;
