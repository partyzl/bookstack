import { React, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Button, ProfileSlider } from "../../components";
import checkToken from "../../App";
import axios from "axios";

const Profile = () => {
  const [avatar, setAvatar] = useState("");
  const [fav_book, setFav_book] = useState("");
  const [fav_character, setFav_character] = useState("");
  const [book_target, setBook_target] = useState("");
  const [error, setError] = useState("");

  let history = useHistory();

  const search = () => {
    history.push("/search");
  };

  checkToken();

  const makeProfile = async (avatar, fav_character, fav_book, book_target) => {
    const username = localStorage.getItem("username");

    try {
      // `https://bookstack-heroku-app.herokuapp.com/register/`,
      // http://localhost:8000/register/
      const { data } = await axios.post(
        `https://bookstack-heroku-app.herokuapp.com/profiles/`,
        {
          user_id: 3,
          // avatar,
          fav_character,
          fav_book,
          // book_target,
        }
      );

      if (data) {
        console.log(data);
        return data;
      } else {
        setError("Sorry, profile setup failed, please check the form again");
      }
    } catch (err) {
      console.log(err);
      setError("Sorry, profile could not be setup");
    }
  };

  const profileSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    const newProfile = makeProfile(
      avatar,
      fav_character,
      fav_book,
      book_target
    );
    if (newProfile) {
      history.push("/profilelanding");
    } else setError("Please try again");
  };

  return (
    <div className="body">
      <h1>Profile Setup</h1>
      <ProfileSlider />
      <form onSubmit={profileSubmit}>
        {/* need to add profile picture to this via a new slider type component */}
        <input
          type="text"
          placeholder="Enter character"
          name="fav-character"
          value={fav_character}
          onChange={(e) => {
            setFav_character(e.target.value);
          }}
        />

        <br />
        <input
          type="text"
          placeholder="Enter book"
          name="fav-book"
          value={fav_book}
          onChange={(e) => {
            setFav_book(e.target.value);
          }}
        />
        <Button
          type="submit"
          data-testid="submit-btn"
          className={"btn btn-light col-sm-2 mb-3"}
          // onClick={search}
        >
          Next
        </Button>
      </form>
      {/* <Button
        type="button"
        className={"btn btn-light col-sm-1 mb-3"}
        onClick={search}
      >
        Skip
      </Button> */}
    </div>
  );
};

export default Profile;
