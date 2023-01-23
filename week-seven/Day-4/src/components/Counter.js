import React, {useState} from 'react'
import Add from './Add';
import Display from './Display';
import Subtract from './Subtract';

function Counter() {
    const [count, setCount] = useState(0);

    const addOne = () => {
        setCount(count + 1);
    }
    const subOne = () => {
        setCount(count - 1);
    }

  return (
    <div>
        <Display count={count} />
        <Add addOne={addOne} />
        <Subtract subOne={subOne} />
    </div>
  )
}

export default Counter