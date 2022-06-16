const mongoose = require('mongoose')
const userSchemas = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    university:{
        type:String,
        required:true
    },
    school:{
        type:String,
        required:true
    },
    description:String,
    Rool:Number
})

module.exports=userSchemas