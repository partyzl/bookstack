import React, { useState, useContext } from "react";
// import "./styles.css";
import axios from "axios";
import { BookContext } from "../../context/bookContext";
import { Books } from "../index";
import "./styles.css";

const Search = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);
  const [books, setBooks] = useContext(BookContext);
  const [data, setData] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBooks();
    setTitle("");
  };

  const updateInput = (e) => {
    const input = e.target.value;
    setTitle(input);
  };

  const fetchBooks = async () => {
    try {
      setError(null);
      const { data } = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${title}`
      );
      if (!data.items.length) {
        setError("Sorry, this book does not exist");
      }
      console.log(data.items);
      const array = data.items.map((book) => {
        return {
          key: book.id,
          title: book?.volumeInfo?.title,
          image: book?.volumeInfo?.imageLinks?.thumbnail,
          author: book?.volumeInfo?.authors ? book.volumeInfo.authors[0] : "",
          genre: book?.volumeInfo?.categories
            ? book.volumeInfo.categories[0]
            : "", 
          publish: book.volumeInfo.publishedDate,
          page_num:book?.volumeInfo.pageCount,
        };
      });
      console.log(array);

      setBooks(array);
    } catch (err) {
      console.log(err);
      setError("Sorry, this Book does not exist");
    }
  };

  return (
    <div id="search-wrapper">
      <form onSubmit={handleSubmit} aria-label="search">
        <input
          className="search-input"
          type="text"
          aria-label="Book"
          value={title}
          name="title"
          placeholder="Search for Books"
          onChange={updateInput}
        />
        <input className="search-btn" type="submit" value="Search" />
      </form>
      <br />
      {books && books[0] && <Books />}
      <p>{error}</p>
    </div>
  );
};

export default Search;
