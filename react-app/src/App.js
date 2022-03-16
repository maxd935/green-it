import './App.css';
import data from './data/data.json';
import Data from './components/Data'
import React, {useState} from "react";



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
      <Data/>


    </div>





  );



}

export default App;
