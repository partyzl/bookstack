import React from "react";
import { Nav, Rating, BookCardNoBtn, CurrentReadCard, Button } from "../../components";
import { useHistory } from "react-router";
import { checkToken } from "../../actions/loginauth";

const CompletedReads = () => {
    let history = useHistory();

    const editReview = () => {
      history.push("/review");
    };
    // https://bookstack-heroku-app.herokuapp.com/books/
  checkToken()
  return (
    <div className="body">
      <p>Completed books</p>
      <BookCardNoBtn />
      <form>
{/* want to render in the current review and the current rating here from db */}
        <label>
            Review: 
        <input type="text" name="review" maxLength="280" disabled/>
        </label>
        
            <div>
            <Button type="button" className={"btn btn-primary"} onClick={editReview}>
                <i className="bi bi-plus-circle"></i> Edit review
            </Button>
            </div>
        </form>
      <Nav />
    </div>
  );
};
export default CompletedReads;