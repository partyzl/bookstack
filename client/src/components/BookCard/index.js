import React from "react";
import "./styles.css";

const BookCard = ({ key, title, cover, author, genre, published }) => {
  console.log(genre, published);
  return (
    <div className="card" id={key}>
      <img src={cover} class="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="title">{title}</h5>
        <p className="details">{author}</p>
        <p className="details">{genre}</p>
        <p className="details">{published}</p>
      </div>
    </div>
  );
};

export default BookCard;
