// // import mongoose
// const mongoose = require('mongoose')

// //connected to mongodb using connection string
// mongoose.connect('mongodb://localhost:27017/userdb',()=>{
//     console.log('connected to MongoDB');
//     })

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/userdb')
  .then(() => {
    // Connection successful, continue your logic here
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    // Handle connection error
    console.error('Error connecting to MongoDB:', error);
  });

//create model
const User=mongoose.model('User',{
    //schema creation
    name: String,
    email: String,
    password: String
})

module.exports={
    User
}