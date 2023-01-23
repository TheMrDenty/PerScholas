import React, {useReducer} from 'react';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';

const reducer = (state, action) => {
    switch(action.type){
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT_COUNT:
            return{
                ...state,
                count: state.count - 1
            };
        default:
            return state
    }
}


function CounterPage() {

    const [state, dispatch] = useReducer(reducer, {
        // sets state of count to 0
        count: 0
    })

    const increment = () => {
        // dispatch calls INCREMENT_COUNT function
        dispatch({
            type: INCREMENT_COUNT
        })
    }

    const decrement = () => {
        dispatch({
            type: DECREMENT_COUNT
        })
    }

  return (
    <div>
        <h1>New counter</h1>
        <h1>Count is {state.count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default CounterPage