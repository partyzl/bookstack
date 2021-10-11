import React, { useContext } from "react";
import { BookCard } from "../index";
import { BookContext } from "../../context/bookContext";

const Books = () => {
  const [book, setBook] = useContext(BookContext);
  return (
    <>
      {book.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          cover={book.image}
          genre={book.categories}
          published={book.publishedDate}

         
        />
      ))}
    </>
  );
};

export default Books;
