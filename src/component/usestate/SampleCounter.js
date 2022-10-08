import React, { useState } from "react";

const SampleCounter = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <h2 style={{ margin: "5rem" }}>Sample counter</h2>
      <h1>{value}</h1>
      <button onClick={() => setValue(value - 1)}>DECREASE</button>
      <button onClick={() => setValue(0)}>RESET</button>
      <button onClick={() => setValue(value + 1)}>INCREASE</button>
    </>
  );
};

export default SampleCounter;
