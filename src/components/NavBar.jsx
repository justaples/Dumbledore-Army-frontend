import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.div`
  .navBar {
    font-family: 'Kaushan Script', cursive; 
    width: 200px;
    font-size: 30px;
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
    text-shadow: 1px 1px black;
    
  }
  
  .transparent{
    margin: 20px;
    height: 50px;
    text-decoration: none;
    color: rgba(20, 1, 1, 0.5);
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
  
  .da{
    font-size: 40px;
    margin: 40px 0px 30px 20px;
  }

  .circle-wrapper {
    position: relative;
    width: 100px;
    height: 100px;
    margin: auto;
    margin-bottom: 30px;
  }

  .icon {
    position: absolute;
    color: black;
    font-size: 70px;
    top: 0px;
    right: -5px;
  }

  .circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    padding: 5px;
    margin-top: 5px;
    animation: spin 25s linear infinite;
  }

  .circle-wrapper:active .circle {
    animation: spin 5s linear infinite;
  }

  .border {
    border: 8px dotted black;
  }

  @keyframes spin { 
    100% { 
      transform: rotateZ(360deg);
    }

  }
`

const NavBar = ({ user, handleLogout }) => {
  
  if(user){
    return (
      <NavContainer>
        <div className="navBar">
          <Link className=' circle-wrapper title' to={'/home'}>
            <div className="border circle"></div>
            <div className="icon">
              <p className='da'>D.A.</p>
            </div>
          </Link>
          <Link className='links hvr-buzz' to={'/members'}>Members</Link>
          <Link className='links hvr-buzz' to={'/spells'}>Spells</Link>
          <Link className='links hvr-buzz' to={'/meetings'}>Meetings</Link>
          <a href="https://justaples.github.io/Harry-Potter-Trivia/" className='links hvr-buzz' target='_blank' rel='noreferrer'>Play Trivia</a>
          <Link className='links hvr-buzz' to={'/home'} onClick={handleLogout}>Umbridge <br /> is coming <br />LOG OUT!!</Link>
        </div>
      </NavContainer>
    )
  } else {
    return (
      <NavContainer>
        <div className="navBar">
          <Link className='transparent hvr-buzz' to={'/login'}>Login</Link>
          <Link className='transparent hvr-buzz' to={'/signup'}>Sign Up</Link>
        </div>
      </NavContainer>
    )
  }
}

export default NavBar