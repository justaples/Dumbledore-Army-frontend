import React from 'react'

const Home = ({user}) => {

  
  if(user){
    return (
      <div>
      <h1>home - there's a user logged in</h1>        
      </div>
    )
  }
  else{
    return(
      <div>
        <h1>Nothing to see here</h1>
      </div>
    )
  }
}

export default Home