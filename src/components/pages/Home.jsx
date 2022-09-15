import React from 'react'
import styled from 'styled-components'

const NoUser = styled.div`
  font-family: 'Crafty Girls', cursive;
  color: rgba(20, 1, 1, 0.4);

  .welcome{
    font-size: 5vw;
    font-weight: bold;
    margin-top: 200px;
    /* margin: auto; */
  }

  .da{
    font-size: 150px;
    margin: 50px 0px 30px 20px;
  }

.circle-wrapper {
  position: relative;
  width: 100px;
  height: 100px;
  margin: auto;
}

.icon {
  position: absolute;
  color: rgba(20, 1, 1, 0.4);
  font-size: 55px;
  top: 0px;
  right: -80px;
}

.circle {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  padding: 5px;
  margin-left: -100px;
  margin-top: 50px;
  animation: spin 25s linear infinite;
}

.circle-wrapper:active .circle {
  animation: spin 5s linear infinite;
}

.border {
  border: 8px dotted rgba(20, 1, 1, 0.5);
}


@keyframes spin { 
  100% { 
    transform: rotateZ(360deg);
  }

}

`
const User = styled.div`
  font-family: 'Crafty Girls', cursive;
  
  h1{
    margin-top: 20vh;
    margin-left: 10vw;
    font-size: 7vw;
  }
`

const Home = ({user}) => {

  // *---- Landing page for when there's a user logged in ----*
  if(user){
    return (
      <User>
          <div>
          <h1>Welcome to <br /> Dumbledore's <br /> Army</h1>        
          </div>
                    
        </User>
      )
    }
    
  // *---- Landing page for when there isn't a user logged in ----*
  else{
    return(
      <NoUser>
        <div className="circle-wrapper title">
          <div className="border circle"></div>
          <div className="icon">
            <p className='da'>D.A.</p>
          </div>
        </div>
        <p className='welcome'>Please Login or Sign Up!</p>
      </NoUser>
    )
  }
}

export default Home