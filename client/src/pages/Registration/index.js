import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { Button } from "../../components";
import "../Login/styles.css";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  let history = useHistory();

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
      if (newAccount) history.push("/profilesetup");
    } else if (confirmPassword != password) {
      setError("Check password values match");
    }
  };

  const makeAccount = async (email, username, password, confirmPassword) => {
    try {
      const { data } = await axios.post(`http://localhost:8000/register/`, {
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
        <br />
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
        <br />
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
        <br />
        <input
          type="password"
          placeholder="Re-enter password"
          name="re-enter-password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        {error && (
          <>
            <br />
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
