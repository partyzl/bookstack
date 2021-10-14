import React from "react";
import { checkToken } from "../../actions/loginauth";
import {getStats} from "../../actions/helpers"

const StatsDisplay = () => {
  checkToken();
  getStats();
  
  return (
    <div>
      
    </div>
  );
};
export default StatsDisplay;
