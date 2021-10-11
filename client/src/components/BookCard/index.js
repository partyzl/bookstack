import React from "react";
import "./styles.css";

const BookCard = ({ title, cover, genre, publish }) => {
  return (
    <div id="card">
      <p className="bookTitle">{title}</p>

      <span className="cover">{cover}</span>
      <div id="details">
        <p>Genre: {genre}</p>
        <p>Publish {publish}</p>
      </div>
    </div>
  );
};

export default BookCard;
