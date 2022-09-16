import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Form = styled.div`
  label{
    font-size: 20px;
  }
`

const NewMeeting = () => {

  // const navigate = useNavigate()
  const [meetings, setMeetings] = useState([])
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_DA_API_URL}/meetings`)
    // fetch('http://localhost:8000/meetings')
    .then(res => res.json())
    .then( items => setMeetings(items))
    // console.log(spells)
    }, [])
  
  const addMeeting = (meeting) =>{
      setMeetings([...meetings, meeting])
    }

  const initialState = {
    date: '',
    subject: ''
  }

  const [formData, setFormData] = useState(initialState)

  const handleChange = (e) => {
    console.log(e.target)
    setFormData({...formData, [e.target.id] : e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    axios.post('http://localhost:8000/meetings/', formData)
    .then(res => {
        setFormData(initialState)
        addMeeting({...res.data})
        window.location.reload()
        // navigate('/meetings', {replace:true})
    })
  }
      
  return (
    <Form>
      <form onSubmit={handleSubmit}>
        <label htmlFor='date'>Date: </label>
        <input type="date" id="date" name="date" min="2022-01-01" max="2030-12-31" onChange={handleChange}/><br />
        
        <label htmlFor='subject'>Subject: </label> 
        <input id='subject' name='subject' type='text' onChange={handleChange}/>

        <input type='submit' value='Add Meeting' />
      </form>
    </Form>
  )
}

export default NewMeeting