import React from 'react'
import { useState } from 'react';
function Inscription() {
  const[nom ,setNom]=useState("")
  const[date,setDate] = useState("")
  const[ville,setVille] = useState("")
  
  const handleDate=(e)=>{
    let x =new Date(e.target.value)
    const dateBirth =`${x.getDay()}/${x.getMonth()}/${x.getFullYear()}` 
    setDate(dateBirth)
   

  }
  return (
    <div>
      <div>
        <h1>L'identifiant</h1>
      </div>
      <input 
      value={nom}
      onChange={(e)=>setNom(e.target.value)}/>
      <div>
        <h1>Mot de passe</h1>
      </div>
      <input />
      <div><h1>Date de Naissance</h1></div>
        <input type='date'
        value={date}
        onChange={handleDate}/>
        <div><h1>Ville</h1></div>
      <select>
        <option value="Rabat">Rabat</option>
        <option value="Agadir">Agadir</option>
        <option selected value="Eljadida">
          Eljadida
        </option>
        <option value="Casablaca">Casablaca</option>
      </select>
      <div><h1>Genre</h1></div>
      <label for="homme">Homme</label>
      <input type='radio' id="homme"></input>
      <label for="femme">Femme</label>
      <input type='radio' id="femme"></input><br></br>
      <div><h1>Loisirs</h1></div>
      <label for="Sport">Sport</label>
      <input type='checkbox' id="Sport"></input>
      <label for="Lecture">Lecture</label>
      <input type='checkbox' id="Lecture"></input>
      <label for="Musique">Musique</label>
      <input type='checkbox' id="Musique"></input>
      <div><h1>Photos</h1></div>
      <input type='file'/><br></br>
      <button className='ins' type='submit'>S'inscrire</button>
      <h1>je suis {nom} ne le {date}</h1>


    </div>
  );
}

export default Inscription