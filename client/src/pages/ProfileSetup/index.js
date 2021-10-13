import React from "react";
import { useHistory } from "react-router";
import { Button } from "../../components";

const ProfileSetup = () => {
  let history = useHistory();

  const home = () => {
    history.push("/profilelanding");
  };

const BASE_URL = "localhost:3000";
const USER_URL = "localhost:3000/profile";

const token = localStorage.getItem("token");

function checkToken() {
	if (!token) {
		history.push("/loginlanding");
		return;
	}
}

  return (
    <div className="body">
      <form>
        {/* need to add profile picture to this via a new slider type component */}
        <input type="text" placeholder="Enter character" name="fav-character" />
        <br />
        <input type="text" placeholder="Enter quote" name="fav-quote" />
        <Button
          type="submit"
          className={"btn btn-light col-sm-2 mb-3"}
          onClick={home}
        >
          Next
        </Button>
      </form>
      <Button
        type="button"
        className={"btn btn-light col-sm-1 mb-3"}
        onClick={home}
      >
        Skip
      </Button>
    </div>
  );
};

export default ProfileSetup;
