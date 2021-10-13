import React from "react";
import "./styles.css";
import { checkToken } from "../../actions/loginauth";
import { LibraryCard, Nav } from "../../components/";

const ToBeRead = () => {
  checkToken()
  return (
    <div>
      <Nav />
      <div className="cardContainer">
        <LibraryCard />
      </div>
    </div>
  );
};

export default ToBeRead;
