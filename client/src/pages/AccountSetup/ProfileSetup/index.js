import React from "react";
import { useHistory } from "react-router";
import { Button } from "../../../components";
import { Header } from "../../../layout"

const ProfileSetup = () => {

    let history = useHistory();

    const home = () => {
      history.push("/search");
    };

    return (
        <div className="body">
            <Header />
            <form>
                {/* need to add profile picture to this via a new slider type component */}
                <input
                    type="text"
                    placeholder="Enter character"
                    name="fav-character"
                />
                <br/>
                <input
                    type="text"
                    placeholder="Enter quote"
                    name="fav-quote"
                />
                <Button
                    type="submit"
                    className={"btn btn-primary col-sm-2 mb-3"}
                    value="Next"
                    onClick={home}
                />
            </form>
            <Button
                type="button"
                className={"btn btn-primary col-sm-1 mb-3"}
                value="Skip"
                onClick={home}
            />
        </div>
    );
};

export default ProfileSetup;