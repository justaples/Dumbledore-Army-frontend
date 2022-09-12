import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import userService from '../../utils/userService'

const SignUp = ({handleSignupOrLogin}) => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: '', 
        email: '',
        password: '', 
        password_confirmation: ''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.id] : e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('past prevendefault')
        try{
          await userService.signup(formData);
          console.log('got past userService.signup')
          // handleSignupOrLogin();
          navigate('/login')
          console.log('got to navigate')
        }
        catch(err){
          console.error('Error signing up')
        }
    }
  return (
    <div>
<div onSubmit={handleSubmit} >
        <h1>Sign Up</h1>
    <div >
      <form >
        <input type="hidden" name="remember" defaultValue="true" />
        <div >
          <div>
            <label htmlFor="username">
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              placeholder="Username"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">
            </label>
            <input
              id="email"
              name="email"
              type="text"
              required
              
              placeholder="Email"
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
          <div>
            <label htmlFor="password_confirmation" >
            </label>
            <input
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              required
              placeholder="Confirm Password"
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <button
            type="submit"

          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </div>
    </div>
  )
}

export default SignUp