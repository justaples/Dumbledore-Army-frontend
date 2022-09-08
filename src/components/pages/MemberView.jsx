import React, {useState, useEffect} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const MemberView = ({members, updateMemberState}) => {

    let {id} = useParams()
    let navigate = useNavigate()
  
    const [member, setMember] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/members/${id}`)
          .then(res => res.json())
          .then( items => setMember(items))
        }, [])

console.log(member)

    const deleteMember = (id) => {
        axios.delete(`http://localhost:8000/members/${id}`)
        .then(res => {
            console.log(res)
            updateMemberState(id)
            navigate('/members/')
        })
    }

  return (
    <div>
        <Link to ={`/members/edit/${member.id}`}>Edit member information</Link>
        <h1>{member.name}</h1>
        <p>{member.age}</p>
        <p>{member.house}</p>
        <img src={member.picture} alt="" />
        <button onClick={() => deleteMember(member.id)}>Delete</button>
    </div>
  )
}

export default MemberView