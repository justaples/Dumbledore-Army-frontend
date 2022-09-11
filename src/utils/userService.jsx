import tokenService from "./tokenService";

const BASE_URL = 'http://localhost:8000/';

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
    if (res.ok) return res.json();
    // Probably a duplicate email
    throw new Error('Email already taken!');
  })
  .then(({token}) => {
    tokenService.setToken(token)
  });
}
  console.log('fetch done')

function getUser() {
  return tokenService.getUserFromToken()
}

function logout() {
  tokenService.removeToken()
}


export default {
  signup,
  getUser,
  logout,
  login
};