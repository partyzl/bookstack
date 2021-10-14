import React from "react";
import { Nav, Rating, BookCardNoBtn, CurrentReadCard, Button } from "../../components";
import { useHistory } from "react-router";
import { checkToken } from "../../actions/loginauth";

const Review = () => {
    let history = useHistory();

    const addReview = () => {
      history.push("/completedreads");
    };
    // https://bookstack-heroku-app.herokuapp.com/books/
  checkToken()
  return (
    <div className="body">
      <p>Add your review!</p>
      <BookCardNoBtn />
      <form>
        <label>
            Review: 
        <input type="text" name="review" maxLength="280"/>
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