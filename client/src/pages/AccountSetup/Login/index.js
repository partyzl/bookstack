import React from "react";
import { useHistory } from "react-router";
import { Button } from "../../../components";
import { Header } from "../../../layout"
import "./styles.css";

const Login = () => {

    let history = useHistory();

    const home = () => {
      history.push("/");
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
                <Button
                    type="submit"
                    className={"btn btn-primary col-sm-2 mb-3"}
                    value="Login"
                    onClick={home}
                />
            </form>
        </div>
    );
};

export default Login;