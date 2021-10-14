import {React, useEffect} from "react";
import { checkToken } from "../../actions/loginauth";
import {getStats} from "../../actions/helpers"


const StatsDisplay = () => {
  checkToken();
  useEffect(getStats,[])

  return (
    <div className="body">
      
    </div>
  );
};
export default StatsDisplay;
