import './App.css';
import Autocomplete from "./components/Search";
import data from "./data/data.json";
import React, {useState} from "react";
import Data from './components/Data';
import cities from './data/cities.json'


function App() {
  const [datas, setDatas] = useState({})

  const handleSearch = (value) => {
    const code = value.split(',')[1].trim()
    fetch('http://localhost:8800/api/'+code)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        setDatas(data)
      });
    const resp = data.filter( el => el.Ville.toLocaleLowerCase() === value.toLocaleLowerCase())
        console.log(resp)
      
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
                    Le but de ce projet a pour base les recherches lancés par l'institut du numérique responsable sur la fragilité numérique <br/>
                    La barre de recherche ci dessous permet de choisir la ville dont on souhaite conaitre l'indice de fragilité numérique. <br/>
                    Cette indice est calculé à partir de 4 grands axes : <br/> <br/>
                    1. <strong>L'accès à l'information </strong> d'un territoire  <br/>
                    2. <strong>L'accès aux interfaces numériques </strong>  <br/>
                    3. <strong>La capacité d'usage des interfaces numériques </strong>  <br/>
                    4. <strong>Les compétences adminsitratives </strong>  <br/>
                </p>


                <p>
                    Ce site a éte developpé dans une optique Green IT. <br/>
                    Dans ce cadre , nous proposons de télecharger cette page en format PDF en
                    cliquant sur son button <br/> <br/>
                            <button style={{height: '33px', backgroundColor: 'blue', color: 'white', border: 'none'}}>Generate Pdf</button>
                </p>


            </div>
            <Autocomplete
                suggestions={cities}
                onSearch={(v) => handleSearch(v)}
            />
            <Data datas={datas} />
    </div>
  );
}

export default App;
