import React, {useEffect, useState} from 'react'
import Member from './Member'
import styled from 'styled-components'

const Names = styled.div`
  .name-list{
  font-family: 'Tangerine', cursive;
  text-decoration: none;
  background-image: url('/img/parchment.png');
  background-repeat: no-repeat; 
  border-radius: 50px;
  box-shadow: inset 0 0 150px #543400;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  height: 100vh;
  width: 50%;
  overflow: auto;}

  .name-list::-webkit-scrollbar {
    display: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-around;
  }

  .title{
    padding-top: 20px;
    font-size: 60px;
    margin: 0px;
    margin-bottom: 15px;
    color: #191717;
    text-shadow:1px 1px #272121;
    text-decoration: 2px underline ;
  }

`

const Members = ({spells}) => {

  const [members, setMembers] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/members')
    .then(res => res.json())
    .then( items => setMembers(items))
  }, [])

  return (
    <Names >
      <div className="name-list">
        <h1 className='title'>Members</h1>
        {members.length === 0 ? 'No members added' : (members.map(member =>{
            return <Member key = {member.id} member={member}  />
        }))

            }
            </div>
    </Names>
  )
}

export default Members