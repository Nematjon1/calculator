import React from "react";

import OperationButton from "./OperationButton.component";

const Operations = () => {
  const operations = ["C", "^", "+", "-", "*", "/", "(", ")","sqrt(x)", "0", ".", "=", "WA"].map((value, index) => {
    return <OperationButton key={index} value={value} />;
  })
  return (
    <div className="operations">{operations}</div>
  );
};

export default Operations;

