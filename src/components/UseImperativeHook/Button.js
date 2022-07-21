import React, { forwardRef } from "react";
import { useState, useImperativeHandle } from "react";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    handleClick() {
      setToggle(!toggle);
    },
  }));

  return (
    <>
      <button className="btn btn-primary btn-lg">
        Button
        {toggle && "Text Inside Child Component"}
      </button>
      <h2></h2>
    </>
  );
});

export default Button;
