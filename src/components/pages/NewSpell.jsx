import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const NewSpell = ({addSpell, closeModal}) => {
  const initialState = {
    spell: '',
    type: '',
    use: '',
    effect: '',
    // members: ''
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
    axios.post('http://localhost:8000/spells/',
     {...formData, members:[formData.members]}
    // formData

     )
    .then(res => {
        setFormData(initialState)
        addSpell({...res.data})
        navigate('/spells', {replace:true})
        closeModal()
    })
}

const [members, setMembers] = useState([])


useEffect(() => {
  fetch('http://localhost:8000/members')
  .then(res => res.json())
  .then( items => setMembers(items))
}, [])

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor='spell'>Spell</label>
        <input id='spell' name='spell' type='text' onChange={handleChange} />
        
        <label htmlFor='type'>Type</label>
        <input id='type' name='type' type='text' onChange={handleChange}/>

        <label htmlFor='use'>Use</label>
        <input id='use' name='use' type='text' onChange={handleChange}/>

        <label htmlFor='effect'>Effect</label>
        <textarea id='effect' name='effect' rows="8" cols="50" type='text' onChange={handleChange}/>
        
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

        <input type='submit' value='Add Spell' />


    </form>
    </div>
  )
}

export default NewSpell