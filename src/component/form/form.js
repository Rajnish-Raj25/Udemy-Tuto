import React, { useState } from "react";

const Form = () => {
  const [input, setInput] = useState("");
  const [email, setemail] = useState("");
  const [people, setPeople] = useState([]);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (input && email) {
      const person = { id: new Date().getTime().toString(), input, email };
      setPeople((people) => {
        return [...people, person];
      });
      setInput("");
      setemail("");
    }
    // console.log("input", input, "email", email);
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
        <form onSubmit={handlesubmit}>
          <label htmlFor="inputdata">Name:</label>
          <input
            type="text"
            name="inputdata"
            id="inputdata"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />{" "}
          <hr />
          <label htmlFor="inputemail">email:</label>
          <input
            type="email"
            name="inputemail"
            id="inputemail"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;
