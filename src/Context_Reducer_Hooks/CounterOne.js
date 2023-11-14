import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => dispatch("decrement")}>-</button>
        <button onClick={() => dispatch("reset")}>0</button>
        <button onClick={() => dispatch("increment")}>+</button>
      </div>
    </div>
  );
}

export default CounterOne;
