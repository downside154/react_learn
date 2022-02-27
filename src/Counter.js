import React, { useState } from "react";


function Counter(){
    const [number, setNumber] = useState(0);

    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1)
        // Does the same as onIncrease, but its a updating function for optimization
    }
    const onIncrease = () => {
        setNumber(number + 1);
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onDecrease}>-1</button>
            <button onClick={onIncrease} >+1</button>
        </div>
    )
}

export default Counter;