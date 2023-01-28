import React from 'react'
import students from '../data'
import Score from './Score';
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
                
                return (
                    <div className='student'>
                        <h1>{name}</h1>
                        <p>{bio}</p>
                        <Score scores={scores} />
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