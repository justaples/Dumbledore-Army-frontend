import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import userToken from '../../utils/userService'

const Login = ({handleSignupOrLogin}) => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState()

  const handleChange = (e) => {
      setFormData({...formData, [e.target.id] : e.target.value})
  }

  const handleSubmit = async(e) => {
      e.preventDefault();
      try{
          await userToken.login(formData);
          handleSignupOrLogin()
          navigate('/')
          window.location.reload()
      } 
      catch (err){
          alert('Invalid Credentials')
      }
    }
    
  return (
    <div onSubmit={handleSubmit} >
        <h1>Sign Into Your Account</h1>
    <div>
      <form action="#" method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div >
          <div>
            <label htmlFor="email" >
            </label>
            <input
              id="email"
              name="email"
              type="text"
              required
              placeholder="E-mail"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login