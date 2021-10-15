import React from "react";
import { checkToken } from "../../actions/loginauth";
import { Search, Nav } from "../../components";

const SearchResults = () => {
  checkToken()

  return (
    <div className="body">
      <Search />
      <Nav />
    </div>
  );
};
export default SearchResults;
