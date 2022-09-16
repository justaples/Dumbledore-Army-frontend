import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
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

const NewSpell = ({addSpell, closeModal}) => {
  const initialState = {
    spell: '',
    type: '',
    use: '',
    effect: '',
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
  // axios.post('http://localhost:8000/spells/',
  axios.post(`${process.env.REACT_APP_DA_API_URL}/spells/`,
  {...formData, members:[formData.members]}
    )
    .then(res => {
      setFormData(initialState)
      addSpell({...res.data})
      navigate('/spells', {replace:true})
      closeModal()
    })
}

  return (
    <Form>
        <form onSubmit={handleSubmit}>
          <label htmlFor='spell'>Spell</label>
          <br />
          <input id='spell' name='spell' type='text' onChange={handleChange} />
          <br />
          
          <label htmlFor='type'>Type</label>
          <br />
          <input id='type' name='type' type='text' onChange={handleChange}/>
          <br />

          <label htmlFor='use'>Use</label>
          <br />
          <input id='use' name='use' type='text' onChange={handleChange}/>
          <br />

          <label htmlFor='effect'>Effect</label>
          <br />
          <textarea id='effect' name='effect' rows="8" cols="50" type='text' onChange={handleChange}/>
          <br />
          <input type='submit' value='Add Spell' />
        </form>
        
{/* {(members.map(member =>{
    return <div>
      <label htmlFor="members">{member.name}</label>
      <input id ="members" type="checkbox" value={member.id} onChange={handleChange} />
      </div>
    } ))} */}

{/*         
{(members.map(member =>{
    return <select name="members" id="members">
      <option value=''>{member.name}</option>
    </select>} ))} */}

{/* <label htmlFor='members'>Members</label>
<input id='members' name='members' type='text' onChange={handleChange}/> */}

    </Form>
  )
}

export default NewSpell