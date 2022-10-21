import React, { useRef } from "react";

const Uncontrolled = () => {
  const name = useRef(null);
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(name.current.value);
  };

  return (
    <>
      <div className="container">
        <h1>uncontrolled input</h1>
        <form onSubmit={handlesubmit}>
          <label htmlFor="ref">Your name :</label>
          <input type="text" id="ref" ref={name} />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
};

export default Uncontrolled;
