import './App.css';
import Autocomplete from "./components/Search";
import data from "./data/data.json";
import React, {useState , useEffect} from "react";
import Data from './components/Data'

function App() {
  const [datas, setDatas] = useState([])
  const [word, setWord] = useState("")

  /*useEffect(() => {
    setDatas((data))
  }, [])*/
  const handleSearch = (value) => {
    const resp = data.filter( el => el.Ville.toLocaleLowerCase() === value.toLocaleLowerCase())
        console.log(resp)
      setDatas(resp)
  }

  return (
    <div className="App">
    <h1>Indice de fragilité numérique</h1>
      <Autocomplete
          suggestions={[
            "Paris",
            "Bobigny",
            "Créteil",
            "Nanterre",
            "Versailles",
          ]}
          onSearch={(v) => handleSearch(v)}
      />
      <Data datas={datas} />
    </div>





  );



}

export default App;
