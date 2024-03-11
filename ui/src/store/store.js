import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userSlice';
import messageSlice from './messageSlice';
import chatSlice from './chatSlice';
export default configureStore({
    reducer : {
       userSlice : userSlice,
       messageSlice:messageSlice,
       chatSlice:chatSlice
    }
});