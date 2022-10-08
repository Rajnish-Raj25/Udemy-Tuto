import React, { useState } from "react";
import { person_data } from "./data";

const UseStateWithArray = () => {
  const [person, setPerson] = useState(person_data);
  //   console.log(person);

  const removesingle = (id) => {
    const updatedlist = person.filter((elem) => {
      return elem.id !== id;
    });
    setPerson(updatedlist);
  };
  return (
    <>
      {person.map((elem) => {
        const { id, name } = elem;
        return (
          <div key={id}>
            <h1> {name}</h1>
            <button onClick={() => removesingle(id)}>single remove</button>
          </div>
        );
      })}

      <button onClick={() => setPerson([])}>remove</button>
    </>
  );
};

export default UseStateWithArray;
