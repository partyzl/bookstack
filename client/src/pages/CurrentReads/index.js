import { React, useState, useEffect } from "react";
import { Nav, CurrentReadCard } from "../../components";
import { checkToken } from "../../actions/loginauth";
import { getBooksList } from "../../actions/helpers";

const CurrentReads = () => {
  checkToken()
  const currentList = getBooksList("current")
  console.log(currentList)
  const [currentBookElements, setCurrentBookElements] = useState([])

  useEffect(() => {
    const current = currentList.map((book) => <CurrentReadCard />)
    setCurrentBookElements(current)
  }, [])
  getBooksList("current")

  return (
    <div className="body">
      <p>Current Reads</p>
      {currentBookElements}
      <Nav />
    </div>
  );
};
export default CurrentReads;
