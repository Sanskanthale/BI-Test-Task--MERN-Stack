import mongoose from "../connection/dbConfig.js";

var chatSchema = mongoose.Schema({
    members : {
        type:Array,  
    },
    
},{timeatamps : true});

export  const chatModel = mongoose.model('chatModel',chatSchema,'chatModel');