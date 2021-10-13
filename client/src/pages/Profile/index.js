import React from "react";
import { Nav, SimpleSlider } from "../../components";

const Profile = () => {
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
      <h2>placeholder username</h2>

      <h4>Favourite Character: </h4>
      {/* will be pulled from db */}
      {/* <h5>{}</h5> */}

      <h4>Favourite Quote: </h4>
      {/* will be pulled from db */}
      {/* <h5>{}</h5> */}

      <h4>Books currently being read: </h4>
      {/* <SimpleSlider /> */}
    </div>
  );
};

export default Profile;
