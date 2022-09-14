import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const NewMeeting = () => {

    const navigate = useNavigate()
    const [meetings, setMeetings] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:8000/meetings')
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
    <div>
<form onSubmit={handleSubmit}>
        <label htmlFor='date'>Date</label>
        <input type="date" id="date" name="date"
    //    value="2018-07-22"
       min="2022-01-01" max="2030-12-31" onChange={handleChange}/>
        
        <label htmlFor='subject'>Subject</label>
        <input id='subject' name='subject' type='text' onChange={handleChange}/>

        <input type='submit' value='Add Meeting' />


    </form>
    </div>
  )
}

export default NewMeeting