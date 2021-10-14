import {React, useState, useEffect} from "react";
import "./styles.css";
import { checkToken } from "../../actions/loginauth";
import { LibraryCard, Nav } from "../../components/";
import { getBooksList } from "../../actions/helpers";

const ToBeRead = () => {

  checkToken()

  const [tbrElements, setTbrElements] = useState([])

  useEffect(async () => {
    const tbrList = await getBooksList("tbr")
    const tbr = tbrList.map((book) => {
    return <LibraryCard book_id={book.id} title={book.title} cover={book.cover} author={book.author}/>
    
  })
    setTbrElements(tbr)
  }, [])

  return (
    <div className="body">
      <Nav />
      <div className="cardContainer">
        {tbrElements}
      </div>
    </div>
  );
};

export default ToBeRead;


