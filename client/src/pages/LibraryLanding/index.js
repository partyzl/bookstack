import React from "react";
import { useHistory } from "react-router";
import { Button, Nav } from "../../components";

const LibraryLanding = () => {
  let history = useHistory();

  const ToBeRead = () => {
    history.push("/toberead");
  };
  const CurrentReads = () => {
    history.push("/currentreads");
  };
  const CompletedReads = () => {
    history.push("/completedreads");
  };

  return (
    <div className="body">
      <Nav />
      <Button
        type="button"
        className={"btn btn-light col-sm-2 mb-3"}
        onClick={ToBeRead}
      >
        To Be Read
      </Button>
      <Button
        type="button"
        className={"btn btn-light col-sm-2 mb-3"}
        onClick={CurrentReads}
      >
        Current Reads
      </Button>
      <Button
        type="button"
        className={"btn btn-light col-sm-2 mb-3"}
        onClick={CompletedReads}
      >
        Completed Reads
      </Button>
    </div>
  );
};

export default LibraryLanding;
