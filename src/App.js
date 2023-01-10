import React from 'react'
import { useState } from 'react'
// import Valid from './Valid';
// import Cherche from './Cherche'
// import List from './List'
import Inscription from './Inscription';
const vegetables = [{nom:"banane",type:"fruits"},
{nom:"raisin",type:"fruits"},
{nom:"pomme",type:"fruits"},
{nom:"kiwi",type:"fruits"},
{nom:"batata",type:"legumes"},
{nom:"carotte",type:"legumes"},
{nom:"chuffla",type:"legumes"},
{nom:"jlbana",type:"legumes"}
];
function App() {
const [Veg, setVeg] = useState('')

  return (
    // <>
    // <Cherche setVeg={setVeg}/>
    // <List listVeg={vegetables.filter((ele) => ele.type == Veg)}/>
    // </>
    // <Valid/>
    <Inscription/>
  )
}

export default App