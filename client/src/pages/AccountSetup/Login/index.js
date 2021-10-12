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

    const register = () => {
        history.push("/registration");
      };

    // will make this consider auth when we link to backend
    // something along the lines of
    // let element= state? <a href={url}>LinkedIn handle</a> : <p>No handle exists for this user!</p>;

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
            <Button
                type="button"
                className={"btn btn-primary col-sm-2 mb-3"}
                value="Register"                    
                onClick={register}
                />
            <p>Don't have an account? Why not register here!</p>  
        </div>
    );
};

export default Login;