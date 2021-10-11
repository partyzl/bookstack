import React, { useState } from "react";
const BookContext = React.createContext([]);

const BookContextProvider = ({ children }) => {
  const [book, setBook] = useState([]);
  return (
    <BookContext.Provider value={[book, setBook]}>
      {children}
    </BookContext.Provider>
  );
};

export { BookContextProvider, BookContext };
