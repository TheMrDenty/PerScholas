import React from 'react'
import Parent from './Parent';

function GrandParents() {
    const grandMother = 'Sally';
    const grandFather = 'Jeff';
  return (
    <div>
        <Parent grandMother={grandMother} grandFather={grandFather} />
    </div>
  )
}

export default GrandParents