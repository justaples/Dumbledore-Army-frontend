import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <ul>
            <li><Link to={'/members'}>Members</Link></li>
            <li><Link to={'/spells'}>Spells</Link></li>
            <li><Link to={'/new-member'}>New Member</Link></li>
            <li><Link to={'/new-spell'}>New Spell</Link></li>
            {/* <li><Link to={'/umbridge'}>Umbridge is coming!</Link></li> */}
        </ul>
    </div>
  )
}

export default NavBar