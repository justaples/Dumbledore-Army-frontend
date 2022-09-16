import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Modal from 'react-modal/lib/components/Modal'
// import MembersInSpells from '../MembersInSpells'
import SpellEdit from './SpellEdit'

const Spell = styled.div`
  .spell-container{
    background-image: url('/img/parchment.png');
    background-size: cover;
    background-repeat: no-repeat; 
    border-radius: 50px;
    box-shadow: inset 0 0 150px #543400;
    padding: 10px;
    width: 50%;
    margin: auto;
    margin-top: 50px;
    margin-left: 29vw;
    font-family: 'Kaushan Script', cursive; 
  }
  
  .buttons{
    margin-bottom: 10px;
  }
  
  .btn{
    background-color: black;
    color: white;
    font-family: 'Kaushan Script', cursive; 
    font-size: 20px;
  }

  h1{
    font-size: 45px;
    text-decoration: underline;
  }

  p{
    font-size: 25px;
  }

  `

const customStyles = {
  content: {
    textAlign: 'center',
    border: '2px solid black',
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
  },
};

const SpellView = ({spells, updateSpellState}) => {

  let {id} = useParams()
  let navigate = useNavigate()

  const [spell, setSpell] = useState([])
  // const [members, setMembers] = useState([])
  
  useEffect(() => {
    // fetch(`http://localhost:8000/spells/${id}`)
    fetch(`${process.env.REACT_APP_DA_API_URL}/spells/${id}/`)
    .then(res => res.json())
    .then( items => setSpell(items))
  }, [id])
  

  const deleteSpell = (id) => {
    // axios.delete(`http://localhost:8000/spells/${id}`)
    axios.delete(`${process.env.REACT_APP_DA_API_URL}/spells/${id}/`)
    .then(res => {
      console.log(res)
      updateSpellState(id)
      navigate('/spells')
    })
  }

  // *--- Handling delete modal ----*
  let subtitleDel;
  const [delModalIsOpen, setDelIsOpen] = React.useState(false);

  function openDelModal() {
    setDelIsOpen(true);
  }

  function afterOpenDelModal() {
    subtitleDel.style.color = 'black';
  }

  function closeDelModal() {
    setDelIsOpen(false);
  }

  // *--- Handling edit modal ----*
  let subtitleEdit;
  const [editModalIsOpen, setIsEditOpen] = React.useState(false);

  function openEditModal() {
    setIsEditOpen(true);
  }

  function afterOpenEditModal() {
    subtitleEdit.style.color = 'black';
  }

  function closeEditModal() {
    setIsEditOpen(false);
  }

  return (
    <Spell>
      <div className="spell-container">

        <h1>{spell.spell}</h1>
        <p> <b>Type: </b> {spell.type}</p>
        <p> <b>Use: </b> {spell.use}</p>
        <p> <b>Effect: </b> {spell.effect}</p>
        <div className="button">

        {/* ----- Button below opens the modal to edit spell ----- */}
        <button className='btn' onClick={openEditModal}>Edit Spell</button>

        {/* ----- Modal to edit spell below ----- */}
        <Modal
        ariaHideApp={false}
        isOpen={editModalIsOpen}
        onAfterOpen={afterOpenEditModal}
        onRequestClose={closeEditModal}
        style={customStyles}
        contentLabel="Edit Modal">
        <h2 ref={(_subtitleEdit) => (subtitleEdit = _subtitleEdit)}>Edit Spell Information</h2>
        <SpellEdit closeEditModal={closeEditModal} />
        <button onClick={closeEditModal}>X</button>
        </Modal>
        {/* ----- Modal to edit spell above ----- */}
        

        {/* ----- Button below opens the modal to delete spell ----- */}
        <button className='btn' onClick={openDelModal}>Delete Spell</button>

        {/* ----- Modal to delete spell below ----- */}
        <Modal
        ariaHideApp={false}
        isOpen={delModalIsOpen}
        onAfterOpen={afterOpenDelModal}
        onRequestClose={closeDelModal}
        style={customStyles}
        contentLabel="Delete Modal">
        <h2 ref={(_subtitleDel) => (subtitleDel = _subtitleDel)}>Are you sure you want to delete this spell?</h2>
        <button onClick={closeDelModal}>X</button>
        <button onClick={() => deleteSpell(spell.id)}>Delete</button>
        </Modal>
        {/* ----- Modal to delete spell above ----- */}
        </div>
      </div>
        

{/* *---- Code below left for future use ----* */}
{/* 
<table className='table'>
  <thead>
    <tr>
      <th className='col-1'>Name</th>
      <th className='col-2'>Learned</th>
    </tr>
  </thead>
  {spell.members && spell.members.map(member=>{
    return (<tbody>
      <tr className='checked'>
      <td>{member.name}</td>
      <td> &#10003;</td>
      </tr>
      </tbody>)
    })}
  </table> */}


  {/* <table>
    <thead>
    <tr>
    <th>Name</th>
    <th>Learned</th>
    </tr>
    </thead>
    <tbody>
    { members.map((member, index) => {
      return (
        <MembersInSpells member={member} i={index} />
        )
      })}
      </tbody>
    </table> */}

    
    
    </Spell>


  )
}

export default SpellView