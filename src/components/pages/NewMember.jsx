import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const NewMember = ({addMember}) => {

    const initialState = {
        name: '',
        age: '',
        house: '',
        picture: '',
    }

    const navigate = useNavigate()

    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        console.log(e.target)
        setFormData({...formData, [e.target.id] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        axios.post('http://localhost:8000/members/', formData)
        .then(res => {
            setFormData(initialState)
            addMember({...res.data})
            navigate('/members', {replace:true})
        })
    }

  return (
    <div>
<form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input id='name' name='name' type='text' onChange={handleChange} />
        
        <label htmlFor='age'>Age</label>
        <input id='age' name='age' type='text' onChange={handleChange}/>

        {/* <label htmlFor='house'>House</label>
        <select name="house" id="house">
            <option value="Gryffindor">Gryffindor</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Slytherin">Slytherin</option>
        </select> */}

        <label htmlFor='house'>House</label>
        <input id='house' name='house' type='text' onChange={handleChange}/>




        <label htmlFor='picture'>Picture</label>
        <input id='picture' name='picture' type='text' onChange={handleChange}/>

        <input type='submit' value='Add Member' />


    </form>
    </div>
  )
}

export default NewMember