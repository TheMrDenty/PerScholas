import React, { useEffect, useRef } from 'react'

function FocusInput() {
    const inputRef = useRef(null);

    useEffect(() => {
        // brings page down to where input is. "focus" on it
        inputRef.current.focus();
    }, [])

  return (
    <div>
        <input type='text' ref={inputRef} />
    </div>
  )
}

export default FocusInput