import React from 'react'

function Score(scores) {
    console.log(scores);
  return (
    <ul>
        {scores.scores.map(({date, score}) =>{
            console.log(date);
            return(
                <li>
                    <div className='score'>
                        <h2>Grade: {score}</h2>
                        <p>~ {date}</p>
                    </div>
                </li>
            )
        })}
    </ul>
  )
}

export default Score