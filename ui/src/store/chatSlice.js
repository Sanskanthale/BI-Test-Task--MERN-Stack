import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { common_url } from "./urls";
const initialState = {
    chatData:{}
}

const chatSlice = createSlice({
    name:"chatSlice",
    initialState,
    reducers:{}
});


export const createChat = async(payload)=>{
    try{
        var result  = await axios.post(`http://localhost:3001/chat`,payload);
        console.log("result::::",result);
        return result.data.chatID;
    }catch(error){
        console.log(error);
    }
}

export default chatSlice.reducer;