import React from "react";
import "./styles.css";

import { LibraryCard, Nav } from "../../components/";

const ToBeRead = () => {
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
