const express = require('express')
const mongoose = require('mongoose')
const userSchemas = require('../Schemas/userSchemas')
const User = new mongoose.model("user",userSchemas)

const router = express.Router()

// get method
router.get('/',(req,res)=>{
    User.find({},(err,data)=>{
        if(err){
            res.status(500).json({
                error:'thare was a server side prbolem'
            })
        }else{
            res.status(200).json({
                result:data
            })
        }
    })
})

// single get method 
router.get('/:id',(req,res)=>{
    User.find({_id:req.params.id},(err,data)=>{
        if(err){
            res.status(500).json({
                error:'thare was a server side prbolem'
            })
        }else{
            res.status(200).json({
                result:data
            })
        }
    })
})

// post method 
router.post('/',(req,res)=>{
    const newUser = User(req.body)
    newUser.save((err)=>{
        if(err){
            res.status(500).json({
                error:'thare was a server side prbolem'
            })
        }else{
            res.status(200).json({
                message:'new User Inserted Successfully'
            })
        }
    })
})

// post method many 
router.post('/all',(req,res)=>{
    User.insertMany(req.body,(err)=>{
        if(err){
            res.status(500).json({
                error:'thare was a server side prbolem'
            })
        }else{
            res.status(200).json({
                message:'Many User Inserted Successfully'
            })
        }
    })
})

//update method 
router.put('/:id',(req,res)=>{
    User.updateOne({_id:req.params.id},
        {$set:
            {
                description:'Do you know ? who i am ?'
            }
        },(err)=>{
        if(err){
            res.status(500).json({
                error:'thare was a server side prbolem'
            })
        }else{
            res.status(200).json({
                message:'Data update Successfully'
            })
        }
    })
})

// delete method 
router.delete('/:id',(req,res)=>{
    User.deleteOne({_id:req.params.id},(err)=>{
        if(err){
            res.status(500).json({
                error:'thare was a server side prbolem'
            })
        }else{
            res.status(200).json({
                message:'Data delete Successfully'
            })
        }
    })
})


module.exports = router 