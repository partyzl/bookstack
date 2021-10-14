import { React, useState, useEffect } from "react";
import { Nav, Rating, CompletedBookCard, CurrentReadCard, Button } from "../../components";
import { useHistory } from "react-router";
import { checkToken } from "../../actions/loginauth";
import { getBooksList } from "../../actions/helpers";

const CompletedReads = () => {
  let history = useHistory();

  checkToken()

  const [finishedBookElements, setFinishedBookElements] = useState([])

  useEffect(async () => {
    const finishedList = await getBooksList("read")
    const finished = finishedList.map((book) => {
      return <CompletedBookCard book={book}/>
    })
    setFinishedBookElements(finished)
  }, [])

  return (
    <div className="body">
      <p>Completed books</p>
      {finishedBookElements}
      <Nav />
    </div>
  );
};
export default CompletedReads;