import React from "react";
import { useHistory } from "react-router";
import { Button } from "../../../components";
import { Header } from "../../../layout"
import "../Login/styles.css";

const Register = () => {

    let history = useHistory();

    // will send user to account setup 
    const setup = () => {
      history.push("/profile-setup");
    };

    // will make this consider auth when we link to backend

    return (
        <div className="body">
            <Header />
            <form>
                <input
                    type="text"
                    placeholder="Enter username"
                    name="username"
                />
                <br/>
                <input
                    type="text"
                    placeholder="Enter email"
                    name="email"
                />
                <br/>
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                />
                <br/>
                <input
                    type="password"
                    placeholder="Re-enter password"
                    name="re-enter-password"
                />
                <Button
                    type="submit"
                    className={"btn btn-primary col-sm-2 mb-3"}
                    value="Register"
                    onClick={setup}
                />
            </form>
        </div>
    );
};

export default Register;