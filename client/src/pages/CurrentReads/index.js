import React from "react";
import { Nav, CurrentReadCard } from "../../components";
import { checkToken } from "../../actions/loginauth";

const CurrentReads = () => {
  checkToken()
  return (
    <div>
      <p>Current Reads</p>
      <CurrentReadCard />
      <Nav />
    </div>
  );
};
export default CurrentReads;
