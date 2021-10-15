import { React, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "./styles.css";
import { Button } from "../index";
import { formatPublishYear } from "../../actions/helpers";

// import { CurrentReads } from "../../pages";

const BookCard = ({ key, title, cover, author, genre, published, page_num}) => {
  const [error, setError] = useState("");
  let history = useHistory();

  // const addBook = () => {
  //   history.push("/currentread");
  // };
  // https://bookstack-heroku-app.herokuapp.com/books/
  const addBook = async () => {
    const username = localStorage.getItem("username");
    const user_id = localStorage.getItem("user_id")
    try {
      const { data } = await axios.post(
        `https://bookstack-heroku-app.herokuapp.com/profiles/${username}/books/`,
        {
          user_id: 3,
          cover: cover,
          title: title,
          author: author,
          page_num: 352,
          genres: genre,
          publish_year: formatPublishYear(published)

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
            <i className="bi bi-plus-circle"></i>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
