import { React } from "react";
import { useHistory } from "react-router";
import "./styles.css";
import { Button } from "../index";
// import { CurrentReads } from "../../pages";

const BookCard = ({ key, title, cover, author, genre, published }) => {
  let history = useHistory();

  const addBook = () => {
    history.push("/currentread");
  };

  return (
    <div className="col-12 col-md-6 col-lg-3 mb-3">
      <div className="card " id={key}>
        <img src={cover} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="title">{title}</h5>
          <p className="details">{author}</p>
          <p className="details">{genre}</p>
          <p className="details">{published}</p>
        </div>
        <div>
          <Button type="button" className={"btn btn-primary"} onClick={addBook}>
            <i class="bi bi-plus-circle"></i> Add to bookshelf
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
