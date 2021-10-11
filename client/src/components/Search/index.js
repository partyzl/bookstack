import React, { useState, useContext } from "react";
// import "./styles.css";
import axios from "axios";
import { BookContext } from "../../context/bookContext";
import { Books } from "../index";

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
        let key = book.id;
        let title = book.volumeInfo.title;
        let image = book.volumeInfo.imageLinks.thumbnail;
        let genre = book.volumeInfo.categories;
        let author = book.volumeInfo.authors;
        let publish = book.volumeInfo.publishedDate;
        return {
          key,
          title,
          image,
          author,
          genre,
          publish,
        };
      });
      setBooks(array);
    } catch (err) {
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
      {books && books[0] && <Books />}
      <p>{error}</p>
    </div>
  );
};

export default Search;
