import './App.css';
import Footer from './components/Footer'
import Graph from "./components/Graph";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div className="App">
    <h1>Indice de fragilité numérique</h1>
      <Dropdown/>
      <Graph/>
      <Footer/>
    </div>





  );



}

export default App;
