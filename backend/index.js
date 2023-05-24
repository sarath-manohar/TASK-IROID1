const express = require('express');
const cors = require('cors');
// import logic
const logic = require('./services/logic');

const app = express();


//connection
app.use(cors({
    origin:'http://localhost:3000'
}))
app.use(express.json());

let users = [];

app.post('/api/signup', (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = users.find(user => user.email === email);
  
  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }
  
  const newUser = { name, email, password };
  users.push(newUser);
  
  return res.status(200).json({ message: 'User created successfully' });
});

app.post('/api/signin', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(user => user.email === email && user.password === password);
  
  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }
  
  return res.status(200).json({ message: 'Sign in successful', user });
});

app.get('/api/user', (req, res) => {
  // Assuming the token is valid, retrieve the user details
  const user = { name: 'John Doe', email: 'johndoe@example.com' };

  return res.status(200).json({ user });
});

app.post('/api/logout', (req, res) => {
  return res.status(200).json({ message: 'Logged out successfully' });
});

app.listen(3001, () => {
  console.log('Backend server is running on port 3001');
});