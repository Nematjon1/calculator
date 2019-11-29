import React from "react";

import Display from "./Display.component";
import Numbers from "./Numbers.component";
import Operations from "./Operations.component";

const Calculator = () => {
  return (
    <div>
      <Display />
      <div className="buttons">
        <Numbers />
        <Operations />
      </div>
    </div>
  );
};

export default Calculator;
