import {React, useEffect, useState} from "react";
import { Nav, Button, ProfileSlider } from "../../components";
import { useHistory } from "react-router";
import { checkToken } from "../../actions/loginauth";

import Avatar1 from "../../images/Avatars1.png";
import Avatar2 from "../../images/Avatars2.png";
import Avatar3 from "../../images/Avatars3.png";
import Avatar4 from "../../images/Avatars4.png";
import Avatar5 from "../../images/Avatars5.png";
import Avatar6 from "../../images/Avatars6.png";

import { getProfile } from "../../actions/helpers"
import "./styles.css";

const Profile = () => {
  checkToken();
  let history = useHistory();

  const username = localStorage.getItem("username");
  
   const [profile, setProfile] = useState(async () => await getProfile())
  
   useEffect(async () => {
    const profileData = await getProfile() 
    console.log(profileData) 
    setProfile(profileData)
   }, []);

    // will send user to account setup

  const setup = () => {
    history.push("/profilesetup");
  };

  const gotToStats = () => {
    history.push("/stats");
  }

  const getProfilePicture = () => {
    const chosenAvatar = localStorage.getItem("avatar");
    console.log("avatar", chosenAvatar);
    if (chosenAvatar) {
      if (chosenAvatar === "1") return Avatar1;
      if (chosenAvatar === "2") return Avatar2;
      if (chosenAvatar === "3") return Avatar3;
      if (chosenAvatar === "4") return Avatar4;
      if (chosenAvatar === "5") return Avatar5;
      if (chosenAvatar === "6") return Avatar6;
    } else {
      return Avatar1;
    }
  };

  return (
    <div className="body">
      <Nav />

      {/* {profileimage} */}
      <img alt="profile picture" src={getProfilePicture()} />

      {/* username */}

      <h4 className="introduction">Hello, {username}, got any new reads?</h4>

      <h4>Favourite Character: </h4>
      {/* will be pulled from db */}
      <h5>{profile.fav_character}</h5>

      <h4>Favourite Book: </h4>
      {/* will be pulled from db */}
      <h5>{profile.fav_book}</h5>

      <h4>Books currently being read: </h4>
      {/* <SimpleSlider /> */}
      <div className="profileBtnContainer">
        <Button
          type="submit"
          data-testid="submit-btn"
          className={"fix btn btn-light col-sm-2 mb-3"}
          onClick={setup}
        >
          Edit
        </Button>
      </div>

      <div className="profileBtnContainer">
      <Button

          type="submit"
          className={"btn btn-light col-sm-2 mb-3"}
          // onClick={setup}
          onClick={gotToStats}
        >View Stats</Button>
        </div>

    </div>
  );
};

export default Profile;
