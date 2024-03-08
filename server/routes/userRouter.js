import express from 'express';
import { userRegistrationController,userListController } from '../controller/userController.js';
var userRouter = express.Router();

userRouter.post('/userRegistration',userRegistrationController);
userRouter.get('/showUserlist',userListController)


export default userRouter;