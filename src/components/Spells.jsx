import React from 'react'
import Spell from './Spell'
import styled from 'styled-components'
import Modal from 'react-modal/lib/components/Modal'
import NewSpell from './pages/NewSpell'

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

  .top{
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .btn{
    color: black;
    background-color: white;
    opacity: 0.5;
    border-radius: 40%;
    height: 35px;
    margin-top: 25px;
    margin-right: 25px;
    float: right;
    font-size: 25px;
  }
`
const customStyles = {
  content: {
    textAlign: 'center',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
  },
};
const Spells = ({spells, members, addSpell}) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#030202';
  }

  function closeModal() {
    setIsOpen(false);
  }
  
  const sortSpells = [...spells]
  sortSpells.sort((a,b) => (a.spell > b.spell) ? 1 :- 1)
  return (
    <List>
      <div className="spell-list">
        <button className='btn' onClick={openModal}>Add</button>
        <div className='top' >
          <h1 className='title'>Spells</h1>
        </div>
      {sortSpells.length === 0 ? 'No spells added' : (sortSpells.map(spell =>{
        return <Spell key = {spell.id} spell={spell} />
      }))}

      </div>


      <Modal
      ariaHideApp={false}
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}>
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add New Spell</h2>
      <NewSpell closeModal={closeModal} addSpell={addSpell}/>
      <button onClick={closeModal}>Close</button>
      </Modal>
    </List>
  )
}

export default Spells