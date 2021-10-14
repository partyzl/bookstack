import React from "react";
import { Nav, Rating, BookCardNoBtn, CurrentReadCard, Button } from "../../components";
import { useHistory } from "react-router";
import { checkToken } from "../../actions/loginauth";
import { movetoFinishedBooks } from "../../actions/helpers";

const Review = () => {
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
          <Button type="button" className={"btn btn-primary"} onClick={addReview}>
            <i className="bi bi-plus-circle"></i> Complete review
          </Button>
        </div>
      </form>
      <Nav />
    </div>
  );
};
export default Review;