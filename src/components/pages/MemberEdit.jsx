import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const Form = styled.div`
    margin: auto;
    display: table-cell;
    align-items: center;
    text-align: center;
    font-weight: bold;
    margin-left: auto;

  input, label{
    text-align: center;
    margin: auto;
    margin-bottom: 10px;
  }
`

const MemberEdit = ({setMembers}) => {

  let {id} = useParams()
  let navigate = useNavigate()

  const initialState = {
      name: '',
      age: '',
      house: '',
      picture: '',
  }

  const [formData, setFormData] = useState(initialState)

  const handleChange = (e) => {
    console.log(e.target)
    setFormData({...formData, [e.target.id] : e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    axios.put(`${process.env.REACT_APP_DA_API_URL}/members/${id}/`, formData)
    .then(res => {
      setFormData(initialState)
      window.location.reload()
      // navigate(`/members/${id}`, {replace: true})
    })
  }

    useEffect(() =>{
      axios.get(`${process.env.REACT_APP_DA_API_URL}/members/${id}/`)
      .then(res =>{
          setFormData(res.data)
      })
    },[])

  return (
    <Form>
        <form onSubmit={handleSubmit}>
        <label  htmlFor='name'>Name</label>
        <br />
        <input id='name' name='name' type='text' value={formData?.name} onChange={handleChange} />
        <br />
        <label htmlFor='age'>Age</label>
        <br />
        <input id='age' name='age' type='text' value={formData?.age} onChange={handleChange}/>
        <br />
        <label htmlFor='house'>House</label>
        <br />
        <input id='house' name='house' type='text' value={formData?.house} onChange={handleChange}/>
        <br />
        <label htmlFor='picture'>Picture</label>
        <br />
        <input id='picture' name='picture' type='text' value={formData?.picture} onChange={handleChange}/>
        <br />
        <br />
        <input type='submit' value='Update Member' />
        </form>
    </Form>
  )
}

export default MemberEdit