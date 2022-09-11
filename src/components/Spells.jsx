import React from 'react'
import Spell from './Spell'
import styled from 'styled-components'

const List = styled.div`
  .spell-list{
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

  .spell-list::-webkit-scrollbar {
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

const Spells = ({spells, members}) => {
  return (
    <List>
        <div className="spell-list">
        <h1 className="title">Spells</h1>
        {spells.length === 0 ? 'No spells added' : (spells.map(spell =>{
          return <Spell key = {spell.id} spell={spell} />
        }))
      }

        {/* {members.length === 0 ? 'No members added' : (members.map(member =>{
          return <Spell key = {member.id} member={member}/>
        }))
      } */}
      </div>
    </List>
  )
}

export default Spells