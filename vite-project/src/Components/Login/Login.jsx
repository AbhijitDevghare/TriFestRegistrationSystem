import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'; // Import useNavigate
import useLoggedIn from '../Hooks/useLoggedIn';
import './Login.css';

function Login() {
  const [handleUserName, handleUserPassword, login,message,setMessage] = useLoggedIn();
  const navigate = useNavigate(); // Use useNavigate hook

  const handleLogin = () => {
    login(navigate); // Pass navigate function to the login function
  };
    
  return (
    <>
      
          <div id='login' className='section'>
          <h2>Login</h2>
          <label>Username:</label>
          <input type='text' placeholder='Enter username' onChange={handleUserName} />
          <label>Password:</label>
          <input type='password' placeholder='Enter password' onChange={handleUserPassword} />
          <label className='labelResp'>{message}</label>
          <button type='submit' onClick={handleLogin}>Submit</button>
          <div>
            <p>Forgot Password</p>
            <Link to='/register'><p>Register</p></Link>
          </div>
        </div>
      
    
    </>
  );
}

export default Login;
