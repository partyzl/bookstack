import React from "react";
import { useHistory } from "react-router";
import { Button } from "../../components";
import "./styles.css";

const Home = () => {
  let history = useHistory();

  const Login = () => {
    history.push("/login");
  };
  const Register = () => {
    history.push("/register");
  };

  return (
    <div className="body">
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
