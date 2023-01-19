import React from 'react'
import Square from './Square'

function Board(props) {
  return (
        <div className='board'>
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
        </div>
  )
}

export default Board