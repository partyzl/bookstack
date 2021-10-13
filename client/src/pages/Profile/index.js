import React from "react";
import { Nav, Button, SimpleSlider } from "../../components";
import { useHistory } from "react-router";
import "./styles.css";

const Profile = () => {
    let history = useHistory();

    // will send user to account setup
    const setup = () => {
      history.push("/profilesetup");
    };

    return (
        <div className="body">
            <Nav />

            {/* profile picture */}
            <img
                alt="profile picture"
                src={`https://avatars.dicebear.com/api/gridy/${
                Math.floor(Math.random() * 90000) + 10000
                }.svg`}
            />

            {/* username */}
            <h4>placeholder username</h4>

            <h4>Favourite Character: </h4>
            {/* will be pulled from db */}
            {/* <h5>{}</h5> */}

            <h4>Favourite Quote: </h4>
            {/* will be pulled from db */}
            {/* <h5>{}</h5> */}

            <h4>Books currently being read: </h4>
            {/* <SimpleSlider /> */}

            <Button
                type="submit"
                className={"btn btn-light col-sm-2 mb-3"}
                onClick={setup}
            >
                Edit
            </Button>
        </div>
  );
};

export default Profile;
