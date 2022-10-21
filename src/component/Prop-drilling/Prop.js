import React, { useState } from "react";
import Props from "./Props";

const Prop = () => {
  const [people, setpeople] = useState("people");

  return (
    <div>
      <h1>Hello World</h1>
      <Props people={people} />
    </div>
  );
};

export default Prop;
