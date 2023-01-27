import React, { useEffect, useRef, useState } from 'react'

function App() {

    const [card, setCard] = useState('');
    const [isValid, setIsValid] = useState(null)

  
    
    useEffect(() => {
        console.log(card);
        if (card !== ''){
            setIsValid(luhnValidate(luhnCalculate(card)))
        } 
    }, [card])

    const luhnCheckSum = (code) => {
        let length = code.length;
        let equalityCheck = length % 2;
        /* console.log(length); */
        let sum = 0;
        for (let i = length-1; i >= 0; i--){
            let d = parseInt(code.charAt(i))
            /* console.log(d); */
            if (i % 2 === equalityCheck){
                d *= 2
            }
            if (d > 9) {
                d -= 9
            }
            sum += d
        }
        return sum % 10
    }

    const luhnCalculate = (partcode) => {
        let checkSum = luhnCheckSum(partcode + '0')
        return checkSum === 0 ? 0 : 10 - checkSum;
    }

    const luhnValidate = (fullcode) => {
        if ((fullcode % 2) === 0) {
            return true;
        } else {
            return false;
        }
    }   

    


   

  return (
    <div>
        <form>
        <label for='input'>Enter Credit Card info:</label>
        <input type='number' value={card} onChange={e => setCard(() => e.target.value)}></input>
        </form>

        {isValid === true? <p>card is valid</p>: null }
        {isValid === false? <p>card isnt valid</p>: null }

    </div>
  )
}

export default App