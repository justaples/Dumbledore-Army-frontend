import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


const Member = ({spell, member}) => {
  return (
    <div>
        <Link to={`/members/${member.id}`}>
            <h1>{member.name}</h1>
        </Link>
          {/* <p>{member.age}</p> */}
    </div>
  )
}

export default Member