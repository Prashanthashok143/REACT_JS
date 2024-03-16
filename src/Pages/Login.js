import React,{useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { PagesValues } from "../Render";

const Login=()=>
{
     const {setAuth}=useContext(PagesValues);
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[errormsg,setErrormsg]=useState("");
    const navigate=useNavigate();
    const submitForm=(event)=>{
    event.preventDefault();
    if(email ==="" || password==="")
    {
        setErrormsg(
        "Please Provide the Email and password"
        )
    }
  
    else {
        setErrormsg("")
        // window.location.pathname="/"; // insted of this,we use navigate
    navigate("/contact",{state:{email:email}})
    localStorage.setItem("username",email)
    setAuth(true)
    }
  
  };
    

    return (
        <div className="border w-25 m-auto p-3 mt-5">
          <form onSubmit={submitForm}>
            <h2 className="text-primary text-center ">Login Form</h2>
            <div>
              <label htmlFor="emailDetail">Email</label>
              <input
                type="email"
                id="emailDetail"
                name="emailDetail"
                className="form-control mb-1"
                placeholder="Enter email.."
                value={email}
                onChange={(event)=>{
                    setEmail(event.target.value)
                }}
              />
              <label htmlFor="password" className="mt-3">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control mb-1"
                placeholder="Enter password.."
                value={password}
                onChange={(event)=>{
                    setPassword(event.target.value)
                }}
                
              />
              
              <button type="submit" className="btn btn-primary mt-4 ">
                Login
              </button>
            </div>
          </form>
          {errormsg && <span>{errormsg}</span> // conditional rendering
          } 
        </div>
      );
}
export default Login;