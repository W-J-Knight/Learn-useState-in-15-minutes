import React, { useState } from 'react';

function App() {
  // dont use a state object
  // const [state, setState] = ({count: 4, theme: 'blue'})
  // instead use to different states values
  const [count, setCount] = useState(4)
  const [theme, setTheme] = useState(4)
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
