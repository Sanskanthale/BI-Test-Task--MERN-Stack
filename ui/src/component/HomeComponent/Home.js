import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { userList } from "../../store/userSlice";
import '../HomeComponent/Home.css';
import { createChat } from "../../store/chatSlice";
import {  useNavigate } from 'react-router-dom';
function Home() {
    const { user, isAuthenticated } = useAuth0();
    console.log("user:", user);
    const [userData, setUserData] = useState({})
    const navigate = useNavigate();

    const sendMessage = async (email) => {
        const payLoad = {
          senderId: user.email,
          reciverId: email,
          message: "hello"
        }
        console.log("payload",payLoad)
        var chat_ID = await createChat(payLoad);
        navigate('/userchat', { state: { email, chat_ID } })
           
      }
    useEffect(() => {
        const fatchData = async () => {
            const res = await userList();
            console.log("res-----", res);
            if (res.status == 200) {
                setUserData(res.data.result);
            }

        }
        fatchData();
 

    }, [userData])
    console.log("userData : ------", userData);
    return (
        <>

            {!isAuthenticated ?
                <h1>Welcome user</h1>
                :
                <>
   <div className="container my-3 ">
        <center><h3>All User List</h3></center>
        <div className="table-responsive">
        <table className="table my-3 border">
          <thead className="thead-dark">
            <tr className="table-active">
              <th scope="col">S No.</th>
              <th scope="col">User Name</th>
              <th scope="col">User Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Chat</th>
            </tr>
          </thead>
          <tbody>
            {
              userData.length != 0 ?
                userData.map((userData, index) => {
                  return (<>
                    {(userData.email != user.email) ? (<> <tr key={index}>
                      <td>{index}</td>
                      <td>{userData.name}</td>
                      <td>{userData.email}</td>
                      <td>{userData.contact}</td>
                      <td> <button className="btn btn-success text-white" onClick={e => sendMessage(userData.email)}>Chat</button>
                      </td>
                    </tr></>) : (<></>)
                    }
                  </>)
                }) : <>
                  <tr>
                    <td colSpan={8} className="text-center">No Data Is Available</td>
                  </tr>
                </>
            }
          </tbody>
        </table>
        </div>
      </div>

                </>
            }

        </>
    )
}

export default Home;

