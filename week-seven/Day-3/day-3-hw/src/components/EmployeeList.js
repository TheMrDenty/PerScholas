import React, { useState } from 'react'
import EmployeeListItem from './EmployeeListItem'
import data from '../data.js'

function EmployeeList() {
    const [people, setPeople] = useState(data);
  return (
    <div className='employee-list'>
        {
            people.map((person) => {
                const {image, name, title} = person;
                console.log(person);
                return (
                    <EmployeeListItem 
                        name={name}
                        title={title}
                        image={image}
                    />
                )
            })
        }
    </div>
  )
}

export default EmployeeList