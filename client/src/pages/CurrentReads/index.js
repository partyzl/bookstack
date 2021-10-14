import React from "react";
import { BookCard } from "../../components";
import { checkToken } from "../../actions/loginauth";

const CurrentReads = () => {
  checkToken()
  return (
    <div>
      <p>testing</p>
      <BookCard />
    </div>
  );
};
export default CurrentReads;
