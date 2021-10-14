import React from "react";
import { useHistory } from "react-router";
import { Button } from "../../components";
import { checkToken } from "../../actions/loginauth";
import "./styles.css";

const Home = () => {
  let history = useHistory();

  const Login = () => {
    history.push("/login");
  };
  const Register = () => {
    history.push("/register");
  };

  checkToken()

  return (
    <div className="body">
      <p className="title overlay">
        <span className="color1">B</span>
        <span className="color2">o</span>
        <span className="color3">o</span>
        <span className="color4">k</span>
        <span className="color1">s</span>
        <span className="color2">t</span>
        <span className="color3">a</span>
        <span className="color4">c</span>
        <span className="color1">k</span>
      </p>

      <div className="buttonContainer">
        <Button
          type="button"
          className={"btn btn-light col-sm-2 mb-3"}
          onClick={Login}
        >
          Login
        </Button>
        <Button
          type="button"
          className={"btn btn-light col-sm-2 mb-3"}
          onClick={Register}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default Home;
