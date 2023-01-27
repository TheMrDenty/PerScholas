import React from 'react'
import students from '../data'
function Student() {
  return (
    <>
        <nav>
            <h1>Class Grades</h1>
        </nav>
        <div className='container'>
            
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
                                        <div className='score'>
                                            <h2>Grade: {score}</h2>
                                            <p>~ {date}</p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                );
                })
            }
        </div>
        <footer>
            
        </footer>
    </>
  )
}

export default Student