import React from "react";
import { Nav, Button, ProfileSlider } from "../../components";
import { useHistory } from "react-router";
import { checkToken } from "../../actions/loginauth";
import "./styles.css";

const Profile = () => {
  let history = useHistory();
  const username = localStorage.getItem("username");
  // will send user to account setup
  const setup = () => {
    history.push("/profilesetup");
  };

  return (
    <div className="body">
      <Nav />

      {/* {profileimage} */}
      <img
        alt="profile picture"
        src={`https://avatars.dicebear.com/api/gridy/${
          Math.floor(Math.random() * 90000) + 10000
        }.svg`}
      />

      {/* username */}
      <h4 className="introduction">Hello, {username}, got any new reads?</h4>

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
        className={"fix btn btn-light col-sm-2 mb-3"}
        onClick={setup}
      >
        Edit
      </Button>
    </div>
  );
};

export default Profile;
