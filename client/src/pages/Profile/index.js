import {React, useEffect, useState} from "react";
import { Nav, Button, ProfileSlider } from "../../components";
import { useHistory } from "react-router";
import { checkToken } from "../../actions/loginauth";
import { getProfile } from "../../actions/helpers"
import "./styles.css";

const Profile = () => {
  checkToken();
  let history = useHistory();
  
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

  const username = localStorage.getItem("username");
  

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
      <h4>{username}</h4>
      
      <h4>Favourite Character: </h4>
      {/* will be pulled from db */}
      <h5>{profile.fav_character}</h5>

      <h4>Favourite Book: </h4>
      {/* will be pulled from db */}
      <h5>{profile.fav_book}</h5>

      <h4>Books currently being read: </h4>
      {/* <SimpleSlider /> */}

      <Button
        type="submit"
        className={"fix btn btn-light col-sm-2 mb-3"}
        // onClick={setup}
      >
        Edit
      </Button>
    </div>
  );
};

export default Profile;
