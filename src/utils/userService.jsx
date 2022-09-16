import tokenService from "./tokenService";

const BASE_URL = `${process.env.REACT_APP_DA_API_URL}/`;

function login(creds){
  return fetch(BASE_URL + 'login/', {
    method:'POST',
    headers: new Headers({'Content-Type':'application/json'}),
    body:JSON.stringify(creds)
  })
  .then(res =>{
    if(res.ok) return res.json()
    throw new Error('Bad Credentials!')
  })
  .then(({token}) => tokenService.setToken(token))
}


function signup(user) {
  
  return fetch(BASE_URL + 'register/', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  }
  )
  .then(res => {
    console.log('fetch done')
    if (res.ok){
      return res.json();
    } else {
      throw new Error('Email already taken!');
    }
    // Probably a duplicate email
  })
  // .then((token) => {
  //   tokenService.setToken(token)
  //   console.log('returning token', token)
  // });

}

function getUser() {
  return tokenService.getUserFromToken()
}

function logout() {
  tokenService.removeToken()
}

const tokenFunctions = {
signup,
getUser,
logout,
login
}
export default tokenFunctions