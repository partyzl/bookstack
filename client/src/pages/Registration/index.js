import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { Button } from "../../components";
import "../Login/styles.css";
import requestRegistration from "../../actions/registerauth"

const Registration = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  let history = useHistory();

  const getUserId = async (e) => {
    const {data} = await axios.get(`https://bookstack-heroku-app.herokuapp.com/profiles/${username}/`)
    if (!data.items.length) {
      console.log("get failed");
    }
    else console.log(data);
  }

  const registerSubmit = async (event) => {
    console.log(password, confirmPassword);
    event.preventDefault();
    setError(null);
    if (password === confirmPassword) {
      const newAccount = makeAccount(
        email,
        username,
        password,
        confirmPassword
      );
      getUserId();
      if (newAccount) history.push("/profilesetup");
    } else if (confirmPassword != password) {
      setError("Check password values match");
    }
  };

  const makeAccount = async (email, username, password, confirmPassword) => {
    try {
      const { data } = await axios.post(`http://bookstack-heroku-app.herokuapp.com/register/`, {
        username,
        email,
        password,
        password_confirmation: confirmPassword,
      });

      if (data) {
        return data;
      } else {
        setError(
          "Sorry, account registration failed, check the form and try again"
        );
      }
    } catch (err) {
      console.log(err);
      setError(
        "Sorry, account registration failed, check the form and try again"
      );
    }
  };

  return (
    <div className="body">
      {/* <Header /> */}
      <p className="title">
        <span className="color1">R</span>
        <span className="color2">e</span>
        <span className="color3">g</span>
        <span className="color4">i</span>
        <span className="color1">s</span>
        <span className="color2">t</span>
        <span className="color3">e</span>
        <span className="color4">r</span>
      </p>

      <form onSubmit={registerSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          required
        />
      
        <input
          type="text"
          placeholder="Enter email"
          name="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        
        <input
          type="password"
          placeholder="Re-enter password"
          name="re-enter-password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />

      {/* :eaving a weird tiny blank button - whats it for?  */}
        {/* <Button
          type="submit"
          className={"btn btn-light col-sm-2 mb-3"}
          // onClick={setup}
          onClick={requestRegistration}
        ></Button> */}
        {error && (
          <>
            <p>{error}</p>
          </>
        )}
        <Button type="submit" className={"btn btn-light col-sm-2 mb-3"}>
          Register
        </Button>
      </form>
    </div>
  );
};

export default Registration;
