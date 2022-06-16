const express = require('express')
const mongoose = require('mongoose')
const RouterUser = require('./RouterHandeler/RouterUser')


const app = express()
app.use(express.json())

// Database Connection 
mongoose.connect('mongodb://localhost/users')
    .then(()=>console.log('Database Connnection successfull'))
    .catch(err => console.log(err))


// Router 
app.use('/user',RouterUser)

// express error 
function errorHandeler(err,req,res,next){
    if(res.headerSent){
        return next(err)
    }
    res.status(500).json({
        error:err
    })
}
// port
app.listen(5000,()=>{
    console.log('server is running...')
})