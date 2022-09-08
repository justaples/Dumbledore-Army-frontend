import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Spell = ({spell, member}) => {

// const [member, setMember] = useState([])

//     useEffect(() => {
//         fetch('http://localhost:8000/members')
//         .then(res => res.json())
//         .then( items => setMember(items))
//       }, [])

//       console.log(member)

// console.log(member)
  return (
    <div>
        <Link to={`/spells/${spell.id}`}>
        <h1>{spell.spell}</h1>
        {/* <h1>{members.name}</h1> */}
        {/* <h1>{member.name}</h1> */}
        </Link>
        {/* <p>{spell.type}</p>
        <p>{spell.use}</p>
        <p>{spell.effect}</p>
        <p>{spell.members}</p> */}
        {/* <p>{members.name}</p> */}

    </div>
  )
}

export default Spell