import React from "react";
import { useRef } from "react";

export default function UseRefHook() {
  const inputRef = useRef(null);
  return (
    <>
      <div className="container text-center">
        <h1 className="my-5">useRef Hook</h1>
        <input
          type="text"
          className="form-control my-3"
          ref={inputRef}
          placeholder="Enter some value.."
        />
        <button
          className="btn btn-danger"
          onClick={() => {
            inputRef.current.value = "";
          }}
        >
          Clear
        </button>
        <button
          className="btn btn-primary m-3"
          onClick={() => {
            inputRef.current.focus();
          }}
        >
          Focus
        </button>
      </div>
      <hr />
    </>
  );
}
