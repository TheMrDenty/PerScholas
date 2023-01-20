import { useState } from "react";



function Counter() {
  const [counter, setCounter] = useState(0);
  const [evenCounter, setEvenCounter] = useState(0)

  const addOne = () => {
    if (counter % 2 === 0) {
        setEvenCounter(evenCounter + 1)
    }
    setCounter(counter + 1);
  }

  const subtractOne = () => {
    if (counter % 2 === 0) {
        setEvenCounter(evenCounter - 1)
    }
    setCounter(counter - 1);
  }

  return (
    <div className="Counter">
      <h1>Counter</h1>
      <h2>{counter}    {evenCounter}</h2>
      <button onClick={addOne}>Click me to Add One</button>
      <button onClick={subtractOne}>Click me to Subtract One</button>
    </div>
  );
}

export default Counter;
