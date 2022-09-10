import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SpellEdit = ({setSpells}) => {
    let {id} = useParams()
    let navigate = useNavigate()

    const initialState = {
        spell: '',
        type: '',
        use: '',
        effect: '',
        // members: ''
    }


    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
      console.log(e.target)
      setFormData({...formData, [e.target.id] : e.target.value })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(formData)
      axios.put(`http://localhost:8000/spells/${id}/`, formData)
      .then(res => {
        setFormData(initialState)
        setSpells(res.data)
        navigate(`/spells/${id}`, {replace: true})
      })
    }

    useEffect(() =>{
        axios.get(`http://localhost:8000/spells/${id}/`)
        .then(res =>{
            setFormData(res.data)
        })
    },[])
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor='spell'>Spell</label>
        <input id='spell' name='spell' type='text' value={formData?.spell} onChange={handleChange} />
        
        <label htmlFor='type'>Type</label>
        <input id='type' name='type' type='text' value={formData?.type} onChange={handleChange}/>

        <label htmlFor='use'>Use</label>
        <input id='use' name='use' type='text' value={formData?.use} onChange={handleChange}/>

        <label htmlFor='effect'>Effect</label>
        <textarea id='effect' name='effect' rows="8" cols="50" type='text' value={formData?.effect}  onChange={handleChange}/>
        
        {/* <label htmlFor='members'>Members</label>
        <input id='members' name='members' type='text' onChange={handleChange}/> */}

        <input type='submit' value='Add Spell' />


    </form>
    </div>
  )
}

export default SpellEdit