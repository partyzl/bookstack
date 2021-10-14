import { React } from "react";
import { Button } from "../index";
import { useHistory } from "react-router";


const CurrentReadCard = ({ key, title, cover, author }) => {
    let history = useHistory();

    const addReview = () => {
      history.push("/review");
    };
    // https://bookstack-heroku-app.herokuapp.com/books/

  return (
    <div className="col-12 col-md-6 col-lg-3 mb-3">
      <div className="card " id={key}>
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
