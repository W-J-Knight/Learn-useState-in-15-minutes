import React, { useState } from "react";

function App() {
    // dont use a state object
    // const [state, setState] = ({count: 4, theme: 'blue'})
    // instead use two different states values
    const [theme, setTheme] = useState("Blue");
    const [count, setCount] = useState(4);
    const decrementCount = () => {
        setCount((prevCount) => prevCount - 1);
    };
    const increaseCount = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={increaseCount}>+</button>
            <p><span>{theme}</span></p>
        </>
    );
}

export default App;
