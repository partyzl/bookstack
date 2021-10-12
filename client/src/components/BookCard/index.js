import { React } from "react";
import { useHistory } from "react-router";
import "./styles.css";
import { Button } from "../index";
import { CurrentReads } from "../../pages";

const BookCard = ({ key, title, cover, author, genre, published }) => {
  let history = useHistory();

  const addBook = () => {
    history.push("/currentread");
  };

  return (
    <div className="card" id={key}>
      <img
        src={cover}
        className="card-img-top col-md-5"
        alt={title}
        width={130}
        height={130}
      />
      <div className="card-body">
        <h5 className="title">{title}</h5>
        <p className="details">{author}</p>
        <p className="details">{genre}</p>
        <p className="details">{published}</p>
      </div>
      <div>
        <Button
          type="button"
          className={"btn btn-primary col-sm-2 mb-3"}
          onClick={addBook}
        />
      </div>
    </div>
  );
};

export default BookCard;
