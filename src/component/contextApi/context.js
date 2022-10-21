import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();
const Context = () => {
  const [people, setPeople] = useState({
    name: "sachin",
    age: 34,
    roll: 43,
    class: "three",
  });

  return (
    <>
      <DataContext.Provider value={{ people }}>
        <h1>context Api</h1>
        <Comp_A />
      </DataContext.Provider>
    </>
  );
};

// second component

const Comp_A = () => {
  const data = useContext(DataContext);
  //   console.log(data.people.name);
  const { name, age, roll } = data.people;
  console.log(name);
  return (
    <div>
      <h1>
        {" "}
        i am compinent A /{name} and i am {age} year old
        <Comp_B />
      </h1>
    </div>
  );
};

const Comp_B = () => {
  const Data = useContext(DataContext);
  const { name, age, roll } = Data.people;
  return (
    <div>
      <h2>
        i am component B {name} and my roll no is {roll} and my age is {age}
      </h2>
    </div>
  );
};

export default Context;
