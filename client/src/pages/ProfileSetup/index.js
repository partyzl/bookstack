import {React, useEffect} from "react";
import { useHistory } from "react-router";
import { Button, ProfileSlider } from "../../components";
import checkToken from "../../App";

const ProfileSetup = () => {
  let history = useHistory();

  const search = () => {
    history.push("/search");
  };

  checkToken();

  return (
    <div className="body">
      <ProfileSlider />
      <form>
        {/* need to add profile picture to this via a new slider type component */}
        <input type="text" placeholder="Enter character" name="fav-character" />
        <br />
        <input type="text" placeholder="Enter quote" name="fav-quote" />
        <Button
          type="submit"
          className={"btn btn-light col-sm-2 mb-3"}
          onClick={search}
        >
          Next
        </Button>
      </form>
      <Button
        type="button"
        className={"btn btn-light col-sm-1 mb-3"}
        onClick={search}
      >
        Skip
      </Button>
    </div>
  );
};

export default ProfileSetup;
