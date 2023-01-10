import React from 'react'
import { useState } from 'react'
function Valid() {
    const [state,setState]=useState("")
    function Handler(){
        if(state.length>=4){return <p>your pass is strong</p>}
        else{
            return <p>your pass is too short</p>
        }

    }
  return (
    <div>
        <input 
        type="password"
        value={state}
        onChange={(e)=>setState(e.target.value)}></input>
        <Handler></Handler>
    </div>
  )
}

export default Valid