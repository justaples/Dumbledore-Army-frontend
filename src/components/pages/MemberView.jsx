import React, {useState, useEffect} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Modal from 'react-modal/lib/components/Modal'
import MemberEdit from './MemberEdit'


const MemberInfo = styled.div`
  /* border: 2px solid red; */
  margin: auto;
  width: 50%;

.picture{
  width: 400px;
}
`

const customStyles = {
  content: {
    border: '2px solid black',
    top: '20%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    // marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const MemberView = ({members, updateMemberState}) => {

    let {id} = useParams()
    let navigate = useNavigate()
  
    const [member, setMember] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/members/${id}`)
          .then(res => res.json())
          .then( items => setMember(items))
        }, [])

console.log(member)

    const deleteMember = (id) => {
        axios.delete(`http://localhost:8000/members/${id}`)
        .then(res => {
            console.log(res)
            updateMemberState(id)
            navigate('/members/')
        })
    }
    let subtitleDel;
    const [delModalIsOpen, setDelIsOpen] = React.useState(false);

    function openDelModal() {
      setDelIsOpen(true);
    }
  
    function afterOpenDelModal() {
      // references are now sync'd and can be accessed.
      subtitleDel.style.color = 'black';
    }
  
    function closeDelModal() {
      setDelIsOpen(false);
    }

    let subtitleEdit;
    const [editModalIsOpen, setIsEditOpen] = React.useState(false);

    function openEditModal() {
      setIsEditOpen(true);
    }
  
    function afterOpenEditModal() {
      // references are now sync'd and can be accessed.
      subtitleEdit.style.color = 'black';
    }
  
    function closeEditModal() {
      setIsEditOpen(false);
    }
  return (
    <MemberInfo>
        <h1>{member.name} - {member.house}</h1>
        <p>Age: {member.age}</p>
        {/* <p>{member.house}</p> */}
        <img src={member.picture} alt="" className='picture'/>
        <br />
        {/* <Link to ={`/members/edit/${member.id}`}>Edit member information</Link> */}
        
        {/* ----- Button below opens the modal to edit Member ----- */}
        <button onClick={openEditModal}>Edit Member</button>

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
        <button id='deleteButt' onClick={openDelModal}>Remove Member</button>
        
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

    </MemberInfo>
  )
}

export default MemberView