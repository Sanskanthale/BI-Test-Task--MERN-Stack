import mongoose from "../connection/dbConfig.js";

var userSchema = mongoose.Schema({
    username : {
        type:String,
        required:true
    },

    email :{
        type:String,
        required:true
    },

    contact:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },
   
   
});

export  const userModel = mongoose.model('userModel',userSchema,'userModel');