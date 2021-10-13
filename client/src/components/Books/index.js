import React, { useContext } from "react";
import { BookCard } from "../index";
import { BookContext } from "../../context/bookContext";

const Books = () => {
  const [book, setBook] = useContext(BookContext);
  return (
    <div className="row">
      {book.map((book) => (
        <BookCard
          key={book.key}
          title={book.title}
          author={book.author}
          cover={book.image}
          genre={book.genre}
          published={book.publish}
        />
      ))}
    </div>
  );
};

export default Books;
