import { React, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "./styles.css";

// import { CurrentReads } from "../../pages";

const BookCardNoBtn = ({ key, title, cover, author, genre, published }) => {
  const [error, setError] = useState("");
  let history = useHistory();

  // const addBook = () => {
  //   history.push("/currentread");
  // };
  // https://bookstack-heroku-app.herokuapp.com/books/
  const addBook = async () => {
    try {
      const { data } = await axios.post(`http://localhost:8000/books/`, {
        id: key,
        user_id: 1,
        title,
        author,
        cover,
        page_num: 1,
        rating: 1,
        publish_year: published,
        date_started: 9999 / 9 / 9,
        date_finished: 9998 / 9 / 8,
        private: false,
        user_notes: "",
      });

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
      </div>
    </div>
  );
};

export default BookCardNoBtn;
