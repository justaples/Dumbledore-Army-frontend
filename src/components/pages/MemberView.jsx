import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const MemberView = ({members}) => {
    let {id} = useParams()

    const [member, setMember] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/members/${id}`)
          .then(res => res.json())
          .then( items => setMember(items))
        }, [])

console.log(member)

  return (
    <div>
        <h1>{member.name}</h1>
        <p>{member.age}</p>
        <p>{member.house}</p>
        <img src={member.picture} alt="" />
    </div>
  )
}

export default MemberView