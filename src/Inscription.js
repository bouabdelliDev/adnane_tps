import React from 'react'

function Inscription() {
  return (
    <div>
      <div>
        <h1>L'identifiant</h1>
      </div>
      <input />
      <div>
        <h1>Mot de passe</h1>
      </div>
      <input />
      <div><h1>Date de Naissance</h1></div>
        <input type='date'/>
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
      <label></label>
      <input type='radio' id="homme"></input>
      <input type='radio' id="femme"></input>
      


    </div>
  );
}

export default Inscription