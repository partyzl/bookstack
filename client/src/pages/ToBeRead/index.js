import {React, useState, useEffect} from "react";
import "./styles.css";
import { checkToken } from "../../actions/loginauth";
import { LibraryCard, Nav } from "../../components/";
import { getBooksList } from "../../actions/helpers";

const ToBeRead = () => {

  checkToken()
  const tbrList = getBooksList("tbr")
  console.log(tbrList)
  const [tbrElements, setTbrElements] = useState([])

  useEffect(() => {
    const tbr = tbrList.map((book) => <LibraryCard />)
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


