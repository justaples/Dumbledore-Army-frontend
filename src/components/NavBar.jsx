import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.div`
    .navBar {
    font-family: 'Tangerine', cursive;
    font-size: 35px;
    text-shadow: 1px 1px black;
    height: 100px;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  
  .links{
    margin: 20px;
    height: 50px;
    text-decoration: none;
    color: black;

  }

  @-webkit-keyframes hvr-buzz {
  50% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  100% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
}
@keyframes hvr-buzz {
  50% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  100% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
}
.hvr-buzz {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.hvr-buzz:hover{
  -webkit-animation-name: hvr-buzz;
  animation-name: hvr-buzz;
  -webkit-animation-duration: 0.15s;
  animation-duration: 0.15s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
`

const NavBar = () => {
  return (
    <NavContainer>
      <div className="navBar">

            <Link className='links hvr-buzz' to={'/members'}>Members</Link>
            <Link className='links hvr-buzz' to={'/spells'}>Spells</Link>
            <Link className='links hvr-buzz' to={'/new-member'}>New Member</Link>
            <Link className='links hvr-buzz' to={'/new-spell'}>New Spell</Link>
            {/* <Link to={'/umbridge'}>Umbridge is coming!</Link> */}
      </div>
    </NavContainer>
  )
}

export default NavBar