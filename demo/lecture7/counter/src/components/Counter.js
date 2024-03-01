
import React, { useState } from 'react';
import './Counter.css';
import IncrementButton from './increment/IncrementButton';
import ResetButton from './reset/ResetButton';

// function add(a, b) {
//     return a + b;
// }

// const add = (a, b) => a + b;

// const add = (a, b) => {
//     return a + b;
// }

// changing state through child components with restricted access
function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };
  
    const reset = () => {
      setCount(0);
    };
  
    return (
      <div className="counter">
        <h1>Counter: {count}</h1>
<<<<<<< HEAD
        <IncrementButton setCount={setCount} />
        <ResetButton setCount={setCount} />
=======
        <IncrementButton onIncrement={increment} />
        <ResetButton onReset={reset} />
>>>>>>> 97e435f2ab81ee92eab3dba64abf22fd1ab4701c
      </div>
    );
  }


export default Counter;