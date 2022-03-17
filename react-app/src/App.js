import './App.css';
import data from './data/data.json';
import Data from './components/Data'
import Search from "./components/Search";
//import React, {useState , useEffect} from "react";




function App() {

  return (
    <div className="App">
    <h1>Indice de fragilité numérique</h1>
      <Search/>
      <Data/>
    </div>





  );



}

export default App;
