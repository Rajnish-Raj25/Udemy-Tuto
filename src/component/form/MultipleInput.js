import React, { useState } from "react";

const MultipleInput = () => {
  const [person, setPerson] = useState({
    inputdata: "",
    inputemail: "",
    age: "",
  });
  const [people, setpeople] = useState([]);

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (person.inputdata && person.inputemail && person.age) {
      const newperson = { ...person, id: new Date().getTime().toString() };
      console.log(newperson.id);
      setpeople([...people, newperson]);
      setPerson({ inputdata: "", inputemail: "", age: "" });
    }
  };
  return (
    <>
      <div
        className="container"
        style={{
          width: "30%",
          margin: "3rem,auto",
          // backgroundColor: "grey",
          padding: "2rem",
        }}
      >
        <form>
          <label htmlFor="inputdata">Name:</label>
          <input
            type="text"
            name="inputdata"
            id="inputdata"
            value={person.inputdata}
            onChange={handlechange}
          />{" "}
          <hr />
          <label htmlFor="inputemail">email:</label>
          <input
            type="email"
            name="inputemail"
            id="inputemail"
            value={person.inputemail}
            onChange={handlechange}
          />
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            name="age"
            id="age"
            value={person.age}
            onChange={handlechange}
          />
          <button type="submit" onClick={handlesubmit}>
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default MultipleInput;
