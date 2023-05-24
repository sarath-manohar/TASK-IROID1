// import db

const db =require('./db')



//logic for register -asynchronous function- promise -.then
const register=(name,email,password)=>{
    console.log('Inside the Register Works');
//acno in db?
//yes
return db.User.findOne({name}).then((response)=>{
    // console.log(response);
    if(response){
        return{
            statusCode:401,
            message:'User Already Registered'
        }
    }
    else{
        //create new object for registration
        const newUser= new db.User({
          name,
          email,
          password
        })
        //to save in database
        newUser.save()
        //To send response back to the client
        return{
            statusCode:200,
            message:'Successfully registered'
        }
    }
})
}
//logic for login -asynchronous function- promise -.then
const login=(email,password)=>{
    console.log("Inside the login function");
    return db.User.findOne({email,password}).then((result)=>{
        //acno present in database
        if(result){

            //generate token for login
            const token=jwt.sign({
                loginemail:email
            },'superkey2023')
            return{
                statusCode:200,
                message:'Successfully logged in',
                //send username to client
                currentUser:result.name,
                //send token to client
                token,
                
            }
        }
        // acno not present in database
        else{
            return{
                statusCode:401,
                message:'Invalid Data'
            }
        }
    })
}
module.exports ={
   register,
   login
}