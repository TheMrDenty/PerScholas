import React from 'react'
import students from '../data'
function Student() {
  return (
    <div>
        {
            students.map((student) => {
            const {name, bio, scores} = student;
            console.log(scores);
            return (
                <div className='student'>
                    <h1>{name}</h1>
                    <p>{bio}</p>
                    <ul>
                        {scores.map(({date, score}) =>{
                            return(
                                <li>
                                    <h1>Grade: {score}</h1>
                                    <date>{date}</date>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            );
            })
        }
    </div>
  )
}

export default Student