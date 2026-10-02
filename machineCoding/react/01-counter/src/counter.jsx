import { useState } from "react";
import "./counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(prevCount => prevCount+1);
  }
  function decrement() {
    setCount(prevCount => prevCount-1) 
  }
  function reset() {
    setCount(0);
  }
  return (
    <div className="main-container">
      <div>
        <span className="count">{count}</span>
      </div>
      <div className="buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>reset</button>
        <button onClick={decrement} disabled={count === 0}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
