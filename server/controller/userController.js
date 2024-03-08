import {userModel} from "../model/userModel.js";
import jwt from 'jsonwebtoken';

export const userRegistrationController = async(req,res)=>{
    const secret_key = "hello";
    const { username, email, contact, password } = req.body;
    var expireTime = {expiresIn : '1d'};
    var payload = {
        email:email,
        username : username,
    }
    var token = jwt.sign(payload,secret_key,expireTime); 
    console.log("token",token);
    console.log("server : ", req.body);
    var obj = {
     username,
     email,
     contact,
     password
    }

            try{
                if(!token)
                response.status(500)
    
               else{
                if(email === obj.email){
                    const result = await userModel.create(obj);
                    console.log(result);
              
                  res.status(200).json({ message: 'user registered successfully' });
                }
                else {
                    res.status(500).json({ message: 'user already exist' });
                }
               

               }
               
            }catch(err){
                      console.log("error in userRegistrationController",err);
            }
}

export const userListController = async(req,res)=>{
    try {
        const userList = await userModel.find();
        console.log("result in userListController:", userList);
        res.status(200).json({ result: userList });
    } catch (err) {
        console.log("error:", err);
    }
}
