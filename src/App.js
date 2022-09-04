import {useState, useEffect} from 'react'
import './App.css';

function App() {

const [spells, setSpells] = useState([])

useEffect(() => {
  fetch('http://localhost:8000/spells')
  .then(res => res.json())
  .then( items => setSpells(items))
}, [])


  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
