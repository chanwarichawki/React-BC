import { useState } from "react";

function Counter() {

  let count = 0;

  useState(0)

  const increment = () => {
    console.log("salam")
    count = count + 1;
  }

  return (
    <>
    <h2>My Counter</h2>
    <div>{count}</div>
    <button onClick={increment} className="btn btn -success">Increment</button>
    </>
  )
}

export default Counter