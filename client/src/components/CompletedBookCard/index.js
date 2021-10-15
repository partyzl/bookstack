import { React, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "./styles.css";

import { Button } from "..";

// import { CurrentReads } from "../../pages";

const CompletedBookCard = ({ book }) => {

  let history = useHistory();

  const editReview = (e) => {
    e.preventDefault()
    history.push(`/review/${book.id}`);
  };

  return (
    <div className="col-12 col-md-6 col-lg-3 mb-3">
      <div className="card " id={book.id}>
        <img src={book.cover} className="card-img-top" alt={book.title} />
        <div className="card-body">
          <h5 className="title">{book.title}</h5>
          <p className="details">{book.author}</p>
          <p className="details">{book.genre}</p>
          <p className="details">{book.published}</p>
        </div>
        <form>
          <label>
            Review:
            <input type="text" name="review" maxLength="280" value={book.user_notes} disabled />
          </label>

          <div>
            <Button type="button" className={"btn btn-primary"} onClick={editReview}>
              <i className="bi bi-plus-circle"></i> Edit review
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompletedBookCard;
