import React from 'react'
import Spell from './Spell'

const Spells = ({spells, members}) => {
  return (
    <div>
        {spells.length === 0 ? 'No spells added' : (spells.map(spell =>{
            return <Spell key = {spell.id} spell={spell} />
        }))
            }

        {/* {members.length === 0 ? 'No members added' : (members.map(member =>{
            return <Spell key = {member.id} member={member}/>
        }))
        } */}
    </div>
  )
}

export default Spells