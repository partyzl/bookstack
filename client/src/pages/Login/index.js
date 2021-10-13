import React from "react";
import { useHistory } from "react-router";
import { Button } from "../../components";
// import { Header } from "../../../layout";
import "./styles.css";

const Login = () => {
  let history = useHistory();

  const profilelanding = () => {
    history.push("/profilelanding");
  };

  const register = () => {
    history.push("/register");
  };

  // will make this consider auth when we link to backend
  // something along the lines of
  // let element= state? <a href={url}>LinkedIn handle</a> : <p>No handle exists for this user!</p>;

  return (
    <div className="body">
      {/* <Header /> */}
      <form>
        <input type="text" placeholder="Enter username" name="username" />
        <br />
        <input type="text" placeholder="Enter email" name="email" />
        <br />
        <input type="password" placeholder="Password" name="password" />
        <Button
          type="submit"
          className={"btn btn-light col-sm-2 mb-3"}
          onClick={profilelanding}
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
