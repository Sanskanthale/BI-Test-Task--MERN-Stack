import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { user_url } from './urls';


const initialState = {

};

const userSlice = createSlice({
  name:'userSlice',
  initialState,
  reducers:{
   
  },
});


export const registerUser = async(user)=>{
  try{
          const result = await axios.post(user_url + "/userRegistration",user);
          console.log("result in register user",result)
  }catch(err){
        console.log("error in registeruser  slice",err);
  }
}

export const userList = async()=>{
    try{
      const result = await axios.get(user_url +"/showUserlist");
      console.log("result in user list slice:",result);
      return result;
  }catch(err){
      console.log("error in user list:",err);
  }
  }





export const { } = userSlice.actions;
export default userSlice.reducer;