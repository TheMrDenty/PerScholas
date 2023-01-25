import React from 'react'

function Display() {
    const employees = [
        { id:1, name: "John", age: 33 },
        { id:2, name: "Tim", age: 52 },
        { id:3, name: "Ralph", age: 36 },
        { id:4, name: "Sam", age: 24 },
      ]
    
      const emp_data = employees.map((e) => {
        return (
          <div>
            <h1>Id: {e.id} | Name: {e.name} | Age: {e.age}</h1>
          </div>
        )
      })

      const employee = {
        id: 1,
        name: 'John',
        email: 'john@gmail.com'
      }

      const emp1 = Object.keys(employee).map((k) => {
        return (
            <div>
                <h2>{k}: {employee[k]}</h2>
            </div>
        )
      })

  return (
    <div>
        {emp_data}
        {emp1}
    </div>
  )
}

export default Display