import { React, useState, useEffect } from "react";
import { Nav, CurrentReadCard } from "../../components";
import { checkToken } from "../../actions/loginauth";
import { getBooksList } from "../../actions/helpers";

const CurrentReads = () => {

  checkToken()
  
  const [currentBookElements, setCurrentBookElements] = useState([])

  useEffect(async () => {
    const currentList = await getBooksList("current")
    const current = currentList.map((book) => <CurrentReadCard key={book.id} title={book.title} cover={book.cover} author={book.author}/>)
    setCurrentBookElements(current)
  }, [])

  return (
    <div className="body">
      <p>Current Reads</p>
      {currentBookElements}
      <Nav />
    </div>
  );
};
export default CurrentReads;
