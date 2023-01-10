import React from 'react'
import { useState } from 'react'

function App() {
    const [state,setState] =useState(0)
    const incr = ()=> {setState(state+1)}
    const dcr = ()=> {setState(state-1)}
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={incr}>+</button>
        <button onClick={dcr}>-</button>
    </div>
  )
}

export default App