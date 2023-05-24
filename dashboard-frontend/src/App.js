import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './index.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  
  return (
    <div className="App">

        <Router>
          <Routes>
             <Route path='/dashboard' element={ <Dashboard/>}/>
             <Route path='/' element={ <Login/>}/>
             <Route path='/register' element={ <Register/>}/>
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
