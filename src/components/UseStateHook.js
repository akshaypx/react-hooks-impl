import React, { useState } from "react";

export default function UseStateHook() {
  const [counter, setCounter] = useState(0);
  const [inp, setInp] = useState("");

  return (
    <>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Counter Via useState</h1>
        <h1>{counter}</h1>
        <button
          className="btn btn-primary"
          style={{ marginLeft: "20px" }}
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Increment
        </button>
      </div>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Input via useState</h1>
        <div className="container">
          <input
            className="form-control"
            type="text"
            placeholder="enter some value"
            onChange={(e) => {
              setInp(e.target.value);
            }}
          />
        </div>
        <h2>{inp}</h2>
      </div>
      <hr />
    </>
  );
}
