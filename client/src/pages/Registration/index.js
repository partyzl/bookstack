import React from "react";
import { useHistory } from "react-router";
import { Button } from "../../components";
import "../Login/styles.css";
import requestRegistration from "../../actions/registerauth"

const Registration = () => {
  let history = useHistory();

  // will send user to account setup
  const setup = () => {
    history.push("/profilesetup");
  };

  // will make this consider auth when we link to backend

  return (
    <div className="body">
      {/* <Header /> */}
      <form>
        <input type="text" placeholder="Enter username" name="username" />
        <br />
        <input type="text" placeholder="Enter email" name="email" />
        <br />
        <input type="password" placeholder="Password" name="password" />
        <br />
        <input
          type="password"
          placeholder="Re-enter password"
          name="re-enter-password"
        />
        <Button
          type="submit"
          className={"btn btn-light col-sm-2 mb-3"}
          // onClick={setup}
          onClick={requestRegistration}
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default Registration;
