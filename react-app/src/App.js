import './App.css';
import Autocomplete from "./components/Search";
import React, {useState} from "react";
import Data from './components/Data';
import cities from './data/cities.json'


function App() {
  const [datas, setDatas] = useState({})
  const [code, setCode] = useState("")

  const handleSearch = (value) => {
    const code = value.split(',')[1].trim()
    setCode(code)
    fetch('https://green-it-back.herokuapp.com/api/'+code)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        setDatas(data)
      });
  }

  const handleDowload = () => {
    console.log(code)
    alert('Fonction en maintenance')
    fetch('https://green-it-back.herokuapp.com/api/pdf/'+code)
    .then(res => console.log(res))
  }

  return (
    <div className="App">
            <h1>Indice de fragilité numérique</h1>
            <div style={{
                border: '1px solid black',
                margin : '10px',
                padding : '10px'
            }}>
                <h2>Présentation</h2>

                <p>
                    Le but de ce projet est de calculer et de comparer l'indice de fragilité numérique des villes de France.<br/>
                    Projet porté par l'Institut du Numérique Responsable (INR)<br/><br/>

                    L'indice de fragilité numérique correspond à l'illestrime numérique d'un territoire donné.<br/>

                    Cet indice est calculé à partir de 4 indicateurs : <br/> 
                    1. <strong>L'accès à l'information </strong> d'un territoire  <br/>
                    2. <strong>L'accès aux interfaces numériques </strong>  <br/>
                    3. <strong>La capacité d'usage des interfaces numériques </strong>  <br/>
                    4. <strong>Les compétences adminsitratives </strong>  <br/>
                </p>


                <p>
                    Ce site a été developpé dans une optique Green IT et respecte l'écoconception.
                </p>


            </div>
              <p>Nous proposons de télecharger les résultats en format PDF en cliquant sur ce bouton</p>
              <button 
                style={{height: '33px', backgroundColor: 'blue', color: 'white', border: 'none'}}
                onClick={handleDowload}>
                  Generate Pdf
              </button>
              <p>La barre de recherche ci-dessous permet de choisir la ville dont on souhaite connaître l'indice de fragilité numérique.</p>
              <Autocomplete
                  suggestions={cities}
                  onSearch={(v) => handleSearch(v)}
              />
              <Data datas={datas} />
            </div>
  );
}

export default App;
