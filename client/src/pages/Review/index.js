import React from "react";
import { Nav, DropDown } from "../../components";
import { checkToken } from "../../actions/loginauth";

const Review = () => {
  checkToken()
  return (
    <div>
      <p>Add your review!</p>
      <DropDown />
      <Nav />
    </div>
  );
};
export default Review;