import React from "react";
import { useHistory } from "react-router";
import { Button } from "../../components";

const Home = () => {
  let history = useHistory();

  const toBeRead = () => {
    history.push("/toberead");
  };

  return (
    <div>
      <h1>hello world</h1>
      <Button
        type="button"
        className={"btn btn-primary"}
        value="To Be Read"
        onClick={toBeRead}
      />
      {/* <Button />
      <Button /> */}
    </div>
  );
};

export default Home;
