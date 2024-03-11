import { useAuth0 } from "@auth0/auth0-react";
function Navbar(){
    const { loginWithRedirect,isAuthenticated,logout } = useAuth0();
    function handleLogin(){
        loginWithRedirect();
    }
    function handleLogout(){
        logout({ logoutParams: { returnTo: window.location.origin } })
    }
    return(<>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    {
         !isAuthenticated ? (<>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/userRegistration">Registration</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={handleLogin}>Login</a>
        </li>       
      </ul>
    </div>
         </>) : 
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={handleLogout}>Logout</a>
        </li>     
      </ul>
    </div>
    }
    
  </div>
</nav>
    </>)
}

export default Navbar;