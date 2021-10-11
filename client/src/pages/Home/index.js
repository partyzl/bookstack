import React from "react";
import { useHistory } from "react-router";
import { Button } from "../../components";

import { Nav } from "../../layout";
import SimpleSlider from "../../components/SimpleSlider";

const Home = () => {
  let history = useHistory();

  const toBeRead = () => {
    history.push("/toberead");
  };

  return (
    <div>
      <h1>hello world</h1>
      <SimpleSlider />
      <div className="buttonContainer">
        <Button
          type="button"
          className={"btn btn-primary col-sm-2 mb-3"}
          value="To Be Read"
          onClick={toBeRead}
        />
        <Button
          type="button"
          className={"btn btn-primary col-sm-2 mb-3"}
          value="Current Reads"
          onClick={toBeRead}
        />
        <Button
          type="button"
          className={"btn btn-primary col-sm-2 mb-3"}
          value="Completed Books"
          onClick={toBeRead}
        />
      </div>
      <Nav />
    </div>
  );
};

export default Home;
