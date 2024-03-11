import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './component/NavbarComponent/Navbar.js';
import UserRegistration from './component/UserComponent/UserRegistration.js';
import UserLogin from './component/UserComponent/UserLogin.js';
import Home from './component/HomeComponent/Home.js';
import Chat from './component/UserComponent/Chat.js';


function App() {
  return (<>
    <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} ></Route>
    <Route path='/userRegistration' element={<UserRegistration/>} ></Route>
    <Route path='/userLogin' element={<UserLogin/>} ></Route>
    <Route path="/userchat" element={<Chat/>}></Route>

   </Routes>
   
   </>);
}

export default App;
