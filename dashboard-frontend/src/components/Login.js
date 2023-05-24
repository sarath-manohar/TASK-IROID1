import React from 'react'
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';


function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userDetails, setUserDetails] = useState(null);
    const handleSignIn = async () => {
        try {
          const response = await fetch('http://localhost:3001/api/signin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email,password }),
          },
          localStorage.setItem("email",email),
          localStorage.setItem("password",password)
          
          );
    
          const data = await response.json();
          alert(data.message);
    
          if (response.ok) {
            setIsLoggedIn(true);
            setUserDetails(data.user);
          }
        } catch (error) {
          console.error(error);
        }
      };
    
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Your Needs On Your Fingertips</a>

   
<button  class="btn-1 btn btn-secondary my-2 my-sm-0 " 
> <Link to={'/register'}>Sign Up</Link></button>
      
    <div class="collapse navbar-collapse" id="navbarColor01">
     
    
        
      
    </div>
  </div>
</nav>
        <>
          <div className='cover'>
          <h2 class="head">Welcome</h2>
          
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        
          <Link to={'/dashboard'}>
          <button class="btn btn-secondary my-2 my-sm-0"  onClick={handleSignIn}>Login</button>
          </Link>
          </div>
        </>
     
        </div>
  )
}

export default Login