import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

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
      axios.put(`http://localhost:8000/members/${id}/`, formData)
      .then(res => {
        setFormData(initialState)
        setMembers(res.data)
        navigate(`/members/${id}`, {replace: true})
      })
    }

    useEffect(() =>{
        axios.get(`http://localhost:8000/members/${id}/`)
        .then(res =>{
            setFormData(res.data)
        })
    },[])

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input id='name' name='name' type='text' value={formData?.name} onChange={handleChange} />
        
        <label htmlFor='age'>Age</label>
        <input id='age' name='age' type='text' value={formData?.age} onChange={handleChange}/>

        {/* <label htmlFor='house'>House</label>
        <select name="house" id="house">
            <option value="Gryffindor">Gryffindor</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Slytherin">Slytherin</option>
        </select> */}

        <label htmlFor='house'>House</label>
        <input id='house' name='house' type='text' value={formData?.house} onChange={handleChange}/>




        <label htmlFor='picture'>Picture</label>
        <input id='picture' name='picture' type='text' value={formData?.picture} onChange={handleChange}/>

        <input type='submit' value='Add Member' />
        </form>
    </div>
  )
}

export default MemberEdit