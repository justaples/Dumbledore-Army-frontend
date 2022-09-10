import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Names = styled.div`
  .names{
    text-decoration: none;
    color: #2c2828;
    font-size: 20px;
    text-shadow:1px 1px #272121;
    margin: 0px;
  }
/* hover effect: https://github.com/IanLunn/Hover/blob/master/css/hover.css */

  @-webkit-keyframes hvr-pulse {
  25% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  75% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  }
  @keyframes hvr-pulse {
    25% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    75% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  }
  .hvr-pulse {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  }
  .hvr-pulse:hover, .hvr-pulse:focus, .hvr-pulse:active {
    -webkit-animation-name: hvr-pulse;
    animation-name: hvr-pulse;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .name{
    margin: 0px;
  }
`


const Member = ({spell, member}) => {
  return (
    <Names>
        <Link className='names' to={`/members/${member.id}`}>
            <h1 className='hvr-pulse name'>{member.name}</h1>
        </Link>
          {/* <p>{member.age}</p> */}
    </Names>
  )
}

export default Member