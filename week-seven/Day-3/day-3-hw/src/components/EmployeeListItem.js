import React from 'react'

function EmployeeListItem({image, name, title}) {
  return (
    <div className='employee-item-container'>
        <img src={image} alt={name} className='person-img' />
        <div className='employee-info'>
            <h4 className='employee-name'>{name}</h4>
            <p className='employee-title'>{title}</p>
        </div>
    </div>
  )
}

export default EmployeeListItem