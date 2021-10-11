import React, { useContext } from "react";
import axios from "axios";
import { Search, BookCard, Books } from "../../components";
import { BookContext } from "../../context/bookContext";

const Book = () => {
  const [books, setBooks] = useContext(BookContext);
  const renderCard = (data) =>
    data.map((bookEntry, i) => (
      <>
        <BookCard>
          title={bookEntry.bookTitle}
          key={i}
          cover={bookEntry.image}
          genre={bookEntry.categories}
          publish={bookEntry.publishedDate}
        </BookCard>
      </>
    ));

  return (
    <>
      <Search />
      {renderCard(books)}
    </>
  );
};

export default Book;
