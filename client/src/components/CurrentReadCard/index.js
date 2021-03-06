import { React } from "react";
import { Button } from "../index";
import { useHistory } from "react-router";


const CurrentReadCard = ({ book_id, title, cover, author }) => {
    let history = useHistory();

    const addReview = (e) => {
      console.log(e)
      const bookId = e.target.parentElement.offsetParent.id
      history.push(`/review/${bookId}`);
    };
    // https://bookstack-heroku-app.herokuapp.com/books/

  return (
    <div className="col-12 col-md-6 col-lg-3 mb-3">
      <div className="card " id={book_id}>
        <img src={cover} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="title">{title}</h5>
          <p className="details">{author}</p>

          <div>
          <Button type="button" className={"btn btn-primary"} onClick={addReview}>
            <i className="bi bi-plus-circle"></i> Add a review
          </Button>
        </div>
          
        </div>
      </div>
    </div>
  );
};

export default CurrentReadCard;
