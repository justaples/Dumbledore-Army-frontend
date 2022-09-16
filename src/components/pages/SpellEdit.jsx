import React, {useState, useEffect} from 'react'
import { useParams, useNavigate} from 'react-router-dom'
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


const SpellEdit = ({setSpells}) => {
  let {id} = useParams()
  let navigate = useNavigate()

  const initialState = {
    spell: '',
    type: '',
    use: '',
    effect: '',
  }


  const [formData, setFormData] = useState(initialState)

  const handleChange = (e) => {
    console.log(e.target)
    setFormData({...formData, [e.target.id] : e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // axios.put(`http://localhost:8000/spells/${id}/`, formData)
    axios.put(`${process.env.REACT_APP_DA_API_URL}/spells/${id}/`, formData)
    .then(res => {
      setFormData(initialState)
      window.location.reload()
      // navigate(`/spells/${id}`, {replace: true})
    })
  }

  useEffect(() =>{
    // axios.get(`http://localhost:8000/spells/${id}/`)
    axios.get(`${process.env.REACT_APP_DA_API_URL}/spells/${id}/`)
    .then(res =>{
        setFormData(res.data)
    })
  },[id])

  return (
    <Form>
      <form onSubmit={handleSubmit}>
        <label htmlFor='spell'>Spell</label>
        <input id='spell' name='spell' type='text' value={formData?.spell} onChange={handleChange} />
        
        <label htmlFor='type'>Type</label>
        <input id='type' name='type' type='text' value={formData?.type} onChange={handleChange}/>

        <label htmlFor='use'>Use</label>
        <input id='use' name='use' type='text' value={formData?.use} onChange={handleChange}/>

        <label htmlFor='effect'>Effect</label>
        <textarea id='effect' name='effect' rows="8" cols="50" type='text' value={formData?.effect}  onChange={handleChange}/>
        
        <input type='submit' value='Edit Spell' />
      </form>
    </Form>
  )
}

export default SpellEdit