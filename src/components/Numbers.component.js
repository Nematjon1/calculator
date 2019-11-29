import React from "react";

import NumberButton from "./NumberButton.component";

const Numbers = () => {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((value, index) => {
    return <NumberButton
      key={index}
      value={value}
    />;
  })
  return (
    <div className="numbers">{numbers}</div>
  );
};

export default Numbers;


