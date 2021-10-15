import React from "react";
import { checkToken } from "../../actions/loginauth";
import { Search, Nav } from "../../components";

const SearchResults = () => {
  checkToken()

  return (
    <div className="body">
      <p className="title overlay" id="pagetitle">
          <span className="color1">D</span>
          <span className="color2">i</span>
          <span className="color3">s</span>
          <span className="color4">c</span>
          <span className="color1">o</span>
          <span className="color2">v</span>
          <span className="color3">e</span>
          <span className="color4">r</span>
        </p>
      <Search />
      <Nav />
    </div>
  );
};
export default SearchResults;
