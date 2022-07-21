import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, show: state.show };
    case "toggleShow":
      return { count: state.count, show: !state.show };
    default:
      return state;
  }
};

export default function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, { count: 0, show: false });
  return (
    <>
      <div className="container my-5" style={{ textAlign: "center" }}>
        <h1>useReducer Hook</h1>
        <h1>{state.count}</h1>
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch({ type: "INCREMENT" });
            dispatch({ type: "toggleShow" });
          }}
        >
          Increment
        </button>
        <h1>{state.show && "This is some text"}</h1>
      </div>
      <hr />
    </>
  );
}
