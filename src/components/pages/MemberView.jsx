import React, {useState, useEffect} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const MemberInfo = styled.div`
  /* border: 2px solid red; */
  margin: auto;
  width: 50%;

.picture{
  width: 400px;
}
`



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
    <MemberInfo>
        <h1>{member.name} - {member.house}</h1>
        <p>Age: {member.age}</p>
        {/* <p>{member.house}</p> */}
        <img src={member.picture} alt="" className='picture'/>
        <br />
        <Link to ={`/members/edit/${member.id}`}>Edit member information</Link>
        <button onClick={() => deleteMember(member.id)}>Delete</button>
    </MemberInfo>
  )
}

export default MemberView