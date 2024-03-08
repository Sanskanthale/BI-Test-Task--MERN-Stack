import express from "express";
import userRouter from "./routes/userRouter.js";
import messageRouter from './routes/messageRouter.js'
import chatRouter from './routes/chatRouter.js'
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/user",userRouter);
app.use("/chat",chatRouter);
app.use("/message",messageRouter);




app.listen(3001,()=>{
    console.log("server connection successful");
})