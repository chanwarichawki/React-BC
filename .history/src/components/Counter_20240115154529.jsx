
function Counter() {

  let count = 0;
  const increment = () => {
    console.log(s)
    count = count + 1;
  }

  return (
    <>
    <h2>My Counter</h2>
    <div>{count}</div>
    <button onClick={increment} className="btn btn -success">IncrementIncrement</button>
    </>
  )
}

export default Counter