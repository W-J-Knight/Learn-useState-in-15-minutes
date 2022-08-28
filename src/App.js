import React, { useState } from 'react';

function App() {
  // const [count, setCount] = useState(4)
  // use function inside  useState large complex variable expamle
  const [count, setCount] = useState(() => {
    console.log("run function")
    return 4
  })
  const decrementCount = () =>{
    setCount((prevCount) => prevCount - 1)
  };
  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1)
  };
  
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={increaseCount}>+</button>
    </>
  )


}

export default App;
