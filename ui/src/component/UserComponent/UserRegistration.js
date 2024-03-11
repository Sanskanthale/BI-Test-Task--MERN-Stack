import { useState } from "react";
import { registerUser } from "../../store/userSlice";
// import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function UserRegistration(){
    //  const navigate = useNavigate();
    const [user,setUser] = useState({});
    const { loginWithRedirect } = useAuth0();

    const getData = (event)=>{
        let {name,value} = event.target;

        setUser({
            ...user,
            [name]:value
        });
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();

        await registerUser(user);
        loginWithRedirect();
        // navigate("/userLogin");

    }
   return(<>
   <div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
          <h4>Register</h4>
        </div>
        <div class="card-body">
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="username" class="form-label">Username</label>
              <input onChange={getData} required type="text" class="form-control" id="username" placeholder="Enter username" name="username"/>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input onChange={getData} required type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
            </div>
            <div class="mb-3">
              <label for="contact" class="form-label">Contact Number</label>
              <input onChange={getData} required type="contact" class="form-control" id="contact" placeholder="Enter contact number" name="contact"/>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label"> Password</label>
              <input onChange={getData} required type="password" class="form-control" id="Password" placeholder="password" name="password"/>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
   </>)
}

export default UserRegistration;