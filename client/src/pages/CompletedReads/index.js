<<<<<<< HEAD
import { React, useState, useEffect } from "react";
import { Nav, Rating, CompletedBookCard, CurrentReadCard, Button } from "../../components";
=======
import React from "react";
import {
  Nav,
  Rating,
  BookCardNoBtn,
  CurrentReadCard,
  Button,
} from "../../components";
>>>>>>> client
import { useHistory } from "react-router";
import { checkToken } from "../../actions/loginauth";
import { getBooksList } from "../../actions/helpers";

const CompletedReads = () => {
  let history = useHistory();
<<<<<<< HEAD

  checkToken()

  const [finishedBookElements, setFinishedBookElements] = useState([])

  useEffect(async () => {
    const finishedList = await getBooksList("read")
    const finished = finishedList.map((book) => {
      return <CompletedBookCard book={book}/>
    })
    setFinishedBookElements(finished)
  }, [])

  return (
    <div className="body">
      <p>Completed books</p>
      {finishedBookElements}
=======

  const editReview = () => {
    history.push("/review");
  };
  // https://bookstack-heroku-app.herokuapp.com/books/
  checkToken();

  return (
    <div className="body">
      <p>Completed books</p>
      <BookCardNoBtn />
      <form>
        {/* want to render in the current review and the current rating here from db */}
        <label>
          Review:
          <input type="text" name="review" maxLength="280" disabled />
        </label>

        <div>
          <Button
            type="button"
            className={"btn btn-primary"}
            onClick={editReview}
            data-testid="submit-btn"
          >
            <i className="bi bi-plus-circle"></i> Edit review
          </Button>
        </div>
      </form>
>>>>>>> client
      <Nav />
    </div>
  );
};
export default CompletedReads;
