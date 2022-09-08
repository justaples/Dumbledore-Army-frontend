import React from 'react'
import Member from './Member'

const Members = ({spells, members}) => {
  return (
    <div>
        {members.length === 0 ? 'No members added' : (members.map(member =>{
            return <Member key = {member.id} member={member} />
        }))
            }
    </div>
  )
}

export default Members