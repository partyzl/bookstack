import React from "react";
import {
  Nav,
  Rating,
  BookCardNoBtn,
  CurrentReadCard,
  Button,
} from "../../components";
import { useHistory } from "react-router";
import { checkToken } from "../../actions/loginauth";
import { movetoFinishedBooks } from "../../actions/helpers";

const Review = () => {
<<<<<<< HEAD
  let history = useHistory();

  const addReview = async (e) => {
    e.preventDefault()
    const path = window.location.href.split('/')
    const bookId = path[4]
    const note = e.target.form[0].value
    const rating = 0
    await movetoFinishedBooks(bookId, note, rating)
    history.push("/completedreads");
  };
  
  checkToken()

=======
  const deployedServerUrl = `https://bookstack-heroku-app.herokuapp.com`;
  const localServerUrl = "http://localhost:8000";
  const addReview = async (e) => {
    console.log(e);
    try {
      const token = localStorage.getItem("token");
      const username = localStorage.getItem("username");

      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({
          user_notes: "This was a good book 10/10",
          rating: 4,
        }),
      };

      const resp = await fetch();
      // `${deployedServerUrl}/profiles/${username}/books/${bookid}`,
      // options
      const data = await resp.json();
      console.log("data", data);
    } catch (err) {
      console.warn(err);
    }
  };

  checkToken();
>>>>>>> client
  return (
    <div className="body">
      <p>Add your review!</p>
      <form>
        <label>
          Review:
          <input type="text" name="review" maxLength="280" />
        </label>
        <Rating />

        <div>
<<<<<<< HEAD
          <Button type="button" className={"btn btn-primary"} onClick={addReview}>
=======
          <Button
            type="button"
            className={"btn btn-primary"}
            onClick={addReview}
            data-testid="submit-btn"
          >
>>>>>>> client
            <i className="bi bi-plus-circle"></i> Complete review
          </Button>
        </div>
      </form>
      <Nav />
    </div>
  );
};
export default Review;
