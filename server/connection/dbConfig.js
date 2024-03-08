import mongoose from 'mongoose';
mongoose.connect("mongodb://127.0.0.1:27017/userdb").then(()=>{
    console.log("database connection successful");
});
 
export default mongoose;