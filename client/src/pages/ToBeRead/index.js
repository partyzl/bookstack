import React from "react";
import "./styles.css";
import { checkToken } from "../../actions/loginauth";
import { LibraryCard, Nav } from "../../components/";

const ToBeRead = () => {

  checkToken()



  return (
    <div className="body">
      <Nav />
      <div className="cardContainer">
        {/* <LibraryCard title= cover= author=/> */}
      </div>
    </div>
  );
};

export default ToBeRead;


