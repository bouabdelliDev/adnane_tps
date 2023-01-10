import React from 'react'
import { useState } from 'react'
function Cherche({setVeg}) {
const [state, setState] = useState('')
  return (
    <>
    <div>Chercher</div>
    <input value={state} onChange={(e) => setState(e.target.value) }/>
    <button type='submit' onClick={() => setVeg(state)}>Search</button>
    </>
  )
}

export default Cherche