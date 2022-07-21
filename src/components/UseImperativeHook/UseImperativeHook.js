import React from "react";
import { useState, useRef } from "react";
import Button from "./Button";

export default function UseImperativeHook() {
  const btnRef = useRef(null);
  return (
    <>
      <div className="container text-center">
        <h1 className="m-5">useImperative Hook</h1>
        <button
          className="btn btn-primary btn-lg m-3"
          onClick={() => {
            btnRef.current.handleClick();
          }}
        >
          Button From Parent
        </button>
        <Button ref={btnRef} />
      </div>
      <hr />
    </>
  );
}
