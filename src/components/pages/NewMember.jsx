import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Form = styled.div`
    margin: auto;
    display: table-cell;
    text-align: center;
    font-weight: bold;

input, label{
    text-align: center;
    margin: auto;
    margin-bottom: 10px;
}
  `

const NewMember = ({addMember, closeModal}) => {

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
            closeModal()
        })
    }

    return (
    <Form>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <br />
            <input id='name' name='name' type='text' onChange={handleChange} />
            <br />
            <label htmlFor='age'>Age</label>
            <br />
            <input id='age' name='age' type='text' onChange={handleChange}/>
            <br />
            <label htmlFor='house'>House</label>
            <br />
            <input id='house' name='house' type='text' onChange={handleChange}/>
            <br />
            <label htmlFor='picture'>Picture</label>
            <br />
            <input id='picture' name='picture' type='text' onChange={handleChange}/>
            <br />
            <input type='submit' value='Add Member' />
        </form>
    </Form>
  )
}

export default NewMember