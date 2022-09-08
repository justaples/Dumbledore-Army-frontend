import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const SpellView = ({spells}) => {

    let {id} = useParams()

    const [spell, setSpell] = useState([])
    // const [member, setMember] = useState([])
    
    useEffect(() => {
    // Promise.all([
        fetch(`http://localhost:8000/spells/${id}`)
        // fetch(`http://localhost:8000/members/${id}`)
    // ])
    // .then(([spell, member]))
      .then(res => res.json())
      .then( items => setSpell(items))
    //   .then( items => setMember(items))
      // console.log(spells)
    }, [])
    
    // useEffect(() => {
    //   fetch(`http://localhost:8000/members`)
    //   .then(res => res.json())
    //   .then( items => setMember(items))
    // }, [])

    // console.log(member)

  return (
    <div>
        <h1>{spell.spell}</h1>
        <p>Type: {spell.type}</p>
        <p>Use: {spell.use}</p>
        <p>Effect: {spell.effect}</p>
        <p>{spell.members}</p>
        {/* <p>{member.name}</p> */}



    </div>
  )
}

export default SpellView