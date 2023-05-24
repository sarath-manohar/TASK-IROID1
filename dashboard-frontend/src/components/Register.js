import React from 'react'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function Register() {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSignUp = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/signup', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
     
      },
      localStorage.setItem("name",name),
      localStorage.setItem("email",email),
      localStorage.setItem("password",password)
      )
    
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error(error);
    }
   
  };

  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
<div class="container-fluid">
<a class="navbar-brand" href="#">Your Needs On Your Fingertips</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
 
</button>
<div class="collapse navbar-collapse" id="navbarColor01">
 
  <form class="d-flex-end">
    
    
  </form>
</div>
</div>
</nav>
    
    <div className='cover'>
        <>
       
          <h2 >Register</h2>
          <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
              
          <Link to={'/'}>
          <button class="btn btn-secondary my-2 my-sm-0" onClick={handleSignUp}>Sign Up</button>
          </Link>
          
        </>

     
        </div>
        </div>
  )
}

export default Register