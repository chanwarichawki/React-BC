import { useState } from "react";

function Counter() {

  let [count, setCount]=useState(0)

  const increment = () => {

    
    console.log("salam")
    
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