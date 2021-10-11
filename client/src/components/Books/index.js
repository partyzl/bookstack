import React, { useContext } from "react";

import { BookContext } from "../../context/bookContext";

const Books = () => {
  const [book, setBook] = useContext(BookContext);
  return (
    <>
      {book.map((Book) => (
        <Book
          key={book.id}
          title={book.title}
          cover={book.image}
          genre={book.categories}
          publish={book.publishedDate}
        />
      ))}
    </>
  );
};

export default Books;
