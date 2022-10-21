import React from "react";
import Props2 from "./Props2";

const Props = ({ people }) => {
  return (
    <div>
      <h1> i am a props {people}</h1>
      <Props2 people={people} />
    </div>
  );
};

export default Props;
