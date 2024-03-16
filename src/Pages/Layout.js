import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { PagesValues } from "../Render";
const Layout = () => {
  const navigate=useNavigate();
  const {auth,setAuth}=useContext(PagesValues)
  const LogOut=()=>{
    if(auth){
      localStorage.clear("username")
      setAuth(false)
    }
    navigate("/login")
  }
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
      
    
            <Link to="/">Home</Link>
        
      {
        auth && (
          <>
       
            <Link to="/todo">TODO</Link>
          
         
          
            <Link to="/contact">Contact</Link>
          
          
            <Link to="/about">About</Link>
          
          </>
        )
      }
      <Link to="/login" onClick={LogOut}>{
              !auth ? "Login" :"Logout"
            }</Link>
              <Link to="/signup" onClick={LogOut}>Signup</Link>
          
    
</div>
</nav>
 
    </div>
  )
};

export default Layout;
