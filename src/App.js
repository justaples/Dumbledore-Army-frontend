import {useState, useEffect} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Spells from './components/Spells';
import Members from './components/Members';
import Home from './components/pages/Home';
import SpellView from './components/pages/SpellView';
import MemberView from './components/pages/MemberView';
import NavBar from './components/NavBar';
import Umbridge from './components/pages/Umbridge';
import NewMember from './components/pages/NewMember';
import NewSpell from './components/pages/NewSpell';
  

function App() {

const [spells, setSpells] = useState([])
const [members, setMembers] = useState([])

useEffect(() => {
  fetch('http://localhost:8000/spells')
  .then(res => res.json())
  .then( items => setSpells(items))
  // console.log(spells)
}, [])

useEffect(() => {
  fetch('http://localhost:8000/members')
  .then(res => res.json())
  .then( items => setMembers(items))
}, [])

console.log(spells)
console.log(members)

const addSpell = (spell) =>{
  setSpells([...spells, spell])
}

const addMember = (member) =>{
  setMembers([...members, member])
}

  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>
      {/* <h1>Dumbledore's Army</h1> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/spells' element= {<Spells spells = {spells} members= {members}/>} />
        <Route path='/members' element= {<Members spells = {spells} members= {members}/>} />
        <Route path='/new-member' element= {<NewMember addMember={addMember} />} />
        <Route path='/new-spell' element= {<NewSpell addSpell={addSpell} />} />
        <Route path='/umbridge' element={<Umbridge />} />
        <Route path='/spells/:id' element={<SpellView spells={spells}/>} />
        <Route path='/members/:id' element={<MemberView members={members}/>} />
        <Route path='*' element={<Navigate to='/' replace />} />

      </Routes>

    </div>
  );
}

export default App;
