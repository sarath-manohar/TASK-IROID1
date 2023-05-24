import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


function Dashboard() {
    const[user,setuser]=useState('')
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

    const handleGetUserDetails = async () => {
        try {
          const response = await axios.get('http://localhost:3001/api/user', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'superkey2023',
            },
          });
          console.log(response);
        //   const data = await axios.response.json();
        //   alert(response.data.message)
          
    
        //   if (response.ok) {
        //     setUserDetails(data.user);
        //   }
        } catch (error) {
          console.error(error);
        }
      };
      const handleLogout = async () => {
        try {
          const response = await fetch('http://localhost:3001/api/logout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'superkey2023',
            },
          },
         
         
          );
    
          const data = await response.json();
          console.log(data);
    
          if (response.ok) {
            setIsLoggedIn(false);
            setUserDetails(null);
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
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
 
</button>
<div class="collapse navbar-collapse" id="navbarColor01">
 
  <form class="d-flex-end">
    
  


<Link to={'/'}>
<button  class="btn-1 btn btn-secondary my-2 my-sm-0 m-50" onClick={handleLogout}
>Logout</button>
      </Link>
  </form>
</div>
</div>
</nav>
    <div>
      




<h2>`Welcome {user}`</h2>
<br></br>
<br></br>
<Row><Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Transportation</Card.Title>
        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card> </Col> 
    <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Food</Card.Title>
        <Card.Text>
         
        </Card.Text>
        
      </Card.Body>
    </Card> </Col>
    <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Travel</Card.Title>
        <Card.Text>
        
        </Card.Text>
        
      </Card.Body>
    </Card></Col>
    <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Hospitals</Card.Title>
        <Card.Text>
         
        </Card.Text>
        
      </Card.Body>
    </Card></Col>
    </Row>
    <br></br>
     <Row>
      <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Education</Card.Title>
        <Card.Text>
        
        </Card.Text>
        
      </Card.Body>
    </Card>
     </Col>
     <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>IT</Card.Title>
        <Card.Text>
       
        </Card.Text>
        
      </Card.Body>
    </Card>
     </Col>
     <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Employees</Card.Title>
        <Card.Text>
        
        </Card.Text>
        
      </Card.Body>
    </Card>
     </Col>
     <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Law</Card.Title>
        <Card.Text>
         
        </Card.Text>
        
      </Card.Body>
    </Card>
     </Col>
      </Row> 
        
        </div>
        </div>
  )
}

export default Dashboard