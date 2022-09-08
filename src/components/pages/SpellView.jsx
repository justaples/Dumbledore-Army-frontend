import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SpellView = ({spells, updateSpellState}) => {

    let {id} = useParams()
    let navigate = useNavigate()

    const [spell, setSpell] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:8000/spells/${id}`)
      .then(res => res.json())
      .then( items => setSpell(items))
    }, [])
    

    console.log(spell)

    const deleteSpell = (id) => {
      axios.delete(`http://localhost:8000/spells/${id}`)
      .then(res => {
          console.log(res)
          updateSpellState(id)
          navigate('/spells')
      })
  }



  return (
    <div>
        <h1>{spell.spell}</h1>
        <p>Type: {spell.type}</p>
        <p>Use: {spell.use}</p>
        <p>Effect: {spell.effect}</p>
        <button onClick={() => deleteSpell(spell.id)}>Delete</button>

        {/* <p>{spell?.members[0].name}</p> */}
        {/* <p>{member.name}</p> */}
        {spell.members && spell.members.map(member=>{
          return <p>{member.name}</p>
        })}


    </div>
  )
}

export default SpellView