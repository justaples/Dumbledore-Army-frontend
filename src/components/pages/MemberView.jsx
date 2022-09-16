import React, {useState, useEffect} from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Modal from 'react-modal/lib/components/Modal'
import MemberEdit from './MemberEdit'


const MemberInfo = styled.div`
  border: 2px solid black;
  margin: auto;
  margin-top: 50px;
  margin-left: 31vw;
  width: 50%;
  background-color: #ffffffda;
  border-radius: 20px;
  font-family: 'Kaushan Script', cursive; 
  
  
  .picture{
    width: 80%;
    border: 7px double black;
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

  p{
    font-size: 25px;
  }

`

const customStyles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid black',
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    // margin: 'auto',
    transform: 'translate(-50%, -50%)',
  },
};

const MemberView = ({members, updateMemberState}) => {

  let {id} = useParams()
  let navigate = useNavigate()

  const [member, setMember] = useState([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_DA_API_URL}/members/${id}/`)
    // fetch(`http://localhost:8000/members/${id}`)
      .then(res => res.json())
      .then( items => setMember(items))
    }, [id])

  console.log(member)

  const deleteMember = (id) => {
      // axios.delete(`http://localhost:8000/members/${id}`)
      axios.delete(`${process.env.REACT_APP_DA_API_URL}/members/${id}/`)
      .then(res => {
          console.log(res)
          updateMemberState(id)
          navigate('/members/')
      })
    }

    // *--- Handling delete modal ----*
  let subtitleDel;
  const [delModalIsOpen, setDelIsOpen] = useState(false);
  
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
  const [editModalIsOpen, setIsEditOpen] = useState(false);

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
    <MemberInfo>
        <h1>{member.name} - {member.house}</h1>
        <p>Age: {member.age}</p>
        <img src={member.picture} alt={member.name} className='picture'/>
        <br />
        
        <div className="buttons">
        {/* ----- Button below opens the modal to edit Member ----- */}
        <button className='btn' onClick={openEditModal}>Edit Member</button>

        {/* ----- Modal to edit Member below ----- */}
        <Modal
        ariaHideApp={false}
        isOpen={editModalIsOpen}
        onAfterOpen={afterOpenEditModal}
        onRequestClose={closeEditModal}
        style={customStyles}
        contentLabel="Edit Modal"
        >
        <h2 ref={(_subtitleEdit) => (subtitleEdit = _subtitleEdit)}>Edit Member Information</h2>
        <MemberEdit closeEditModal={closeEditModal} />
        <button onClick={closeEditModal}>X</button>
        </Modal>
        {/* ----- Modal to edit Member above ----- */}

        {/* ----- Button below opens the modal to delete member ----- */}
        <button className='btn' onClick={openDelModal}>Remove Member</button>
        
        {/* ----- Modal to delete member below ----- */}
        <Modal
        ariaHideApp={false}
        isOpen={delModalIsOpen}
        onAfterOpen={afterOpenDelModal}
        onRequestClose={closeDelModal}
        style={customStyles}
        contentLabel="Delete Modal"
        >
        <h2 ref={(_subtitleDel) => (subtitleDel = _subtitleDel)}>Are you sure you want to remove this member from the group?</h2>
        <button onClick={closeDelModal}>X</button>
        <button onClick={() => deleteMember(member.id)}>Delete</button>
        </Modal>
        {/* ----- Modal to delete member above ----- */}
        </div>

    </MemberInfo>
  )
}

export default MemberView