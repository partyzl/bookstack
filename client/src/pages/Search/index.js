import React from "react";
import { checkToken } from "../../actions/loginauth";
import { Search } from "../../components";

const SearchResults = () => {
  checkToken()

  return (
    <div>
      <Search />
    </div>
  );
};
export default SearchResults;
