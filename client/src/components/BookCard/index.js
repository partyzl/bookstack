import { React, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "./styles.css";
import { Button } from "../index";

// import { CurrentReads } from "../../pages";

const BookCard = ({ key, title, cover, author, genre, published }) => {
  const [error, setError] = useState("");
  let history = useHistory();

  // const addBook = () => {
  //   history.push("/currentread");
  // };
  // https://bookstack-heroku-app.herokuapp.com/books/
  const addBook = async () => {
    const username = localStorage.getItem("username");
    console.log(username);
    try {
      const { data } = await axios.post(
        `https://bookstack-heroku-app.herokuapp.com/profiles/${username}/books/`,
        {
          user_id: 3,
          title: title,
          author: author,
          page_num: 1,
          publish_year: 9999
        }
      );

      if (data) {
        return data;
      } else {
        setError("Sorry, book could not be added to your to be read stack");
      }
    } catch (err) {
      setError("Sorry, book could not be added to your to be read stack");
    }
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
            <i className="bi bi-plus-circle"></i> Add to bookshelf
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
