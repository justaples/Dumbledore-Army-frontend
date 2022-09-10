import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
import SpellView from './pages/SpellView'

const MembersInSpells = ({member, index}) => {

    const [check, setCheck] = useState(localStorage.getItem('check') ==='false')

    useEffect(() => {
      localStorage.setItem('check', check)
    },[check]);

    const handleCheckMark = () =>{
      setCheck(!check)
    }

    const [members, setMembers] = useState([])

    useEffect(() => {
    fetch('http://localhost:8000/members')
    .then(res => res.json())
    .then( items => setMembers(items))
    }, [])

  return (
    <div>
        <tr onClick={handleCheckMark}>
        <td>{member.name}</td>
        {check ? <td>&#10003;</td> : <td></td>}
        </tr>
    </div>
  )
}

export default MembersInSpells