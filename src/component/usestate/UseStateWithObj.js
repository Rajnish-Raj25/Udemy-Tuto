import React, { useState } from "react";

const UseStateWithObj = () => {
  const handleclik = () => {
    setStudent({ ...student, class: "tenth" });
  };

  const [student, setStudent] = useState({
    name: "sachin",
    roll: 34,
    class: "eight",
  });

  return (
    <>
      <h1>{student.name}</h1>
      <h1>{student.roll}</h1>
      <h1>{student.class}</h1>
      <button onClick={handleclik}>change me</button>
    </>
  );
};

export default UseStateWithObj;
