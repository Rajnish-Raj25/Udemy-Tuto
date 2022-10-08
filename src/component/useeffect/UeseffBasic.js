import React, { useEffect, useState } from "react";

const UeseffBasic = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("useeffect gets called");
    document.title = `new message ${value}`;
  });
  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>increase me</button>
    </>
  );
};

export default UeseffBasic;
