import './App.css';
import data from './data/data.json';
import React, {useState} from "react";

const parisStats = data.Paris;
const bobigny = data.Bobigny;
const creteil = data.Créteil;
const nanterre = data.Nanterre;
const versailles = data.Versailles;



function App() {
  const [city, setCity] = useState("")

  return (
    <div className="App">
    <h1>Indice de fragilité numérique</h1>
      <form action="">
        <label>Ville:</label>
        <input type="text"
               value={city}
               onChange={(e) => setCity(e.target.value)}
        />
      </form>
      <p>{city}</p>
    </div>





  );



}

export default App;
