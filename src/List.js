import React from 'react'
function List(props) {
  return (
    <div>
    {props.listVeg.map((elem) =>  <p>{elem.nom}</p>)}
    </div>
  )
}

export default List