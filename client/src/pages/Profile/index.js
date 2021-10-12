import React from "react";
import { SimpleSlider } from "../../components";
import { Nav } from "../../layout";

const Profile = () => {

    return (
        <div className="body">

            {/* profile picture */}
            <img alt="profile picture"/>

            {/* username */}
            <h2>placeholder username</h2>

            <h4>Favourite Character: </h4>
            {/* will be pulled from db */}
            {/* <h5>{}</h5> */}

            <h4>Favourite Quote: </h4>
            {/* will be pulled from db */}
            {/* <h5>{}</h5> */}

            <h4>Books currently being read: </h4>
            <SimpleSlider />
            
            <Nav />
        </div>
    )

};

export default Profile;
