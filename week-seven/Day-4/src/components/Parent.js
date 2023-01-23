import React from 'react'
import GrandChild from './GrandChild'

function parent({grandMother, grandFather}) {
  return (
    <div>
        <GrandChild grandMother={grandMother} grandFather={grandFather} />
    </div>
  )
}

export default parent