import React,{useState} from "react";

function FormFun()
{
    const[emailid,setEmailid]=useState("");
    const[password,setPassword]=useState("");
    const[errormsg,setErrormsg]=useState("");
   const manageEmail=(event)=>
   {
    setEmailid(event.target.value)
    
   }
   const managePassword=(event)=>
   {
    setPassword(event.target.value)
   }
   const   submitForm=(event)=>{
    event.preventDefault();
    if(emailid ==="" || password==="")
    {
        setErrormsg(
        "Please Provide the Email and password"
        )
    }
    else if(emailid !=="Admin@gmail.com" || password!=="Admin")
    {
        setErrormsg(
            "please provide correct email and password"
        )
    }
    else {
        setErrormsg(
           `email: ${emailid}
                    password: ${password}`
                    
        )
    }
  
  }
    

    return (
        <div className="border w-25 m-auto p-3 mt-5">
          <form onSubmit={submitForm}>
            <h2 className="text-primary text-center ">Login Form</h2>
            <div>
              <label htmlFor="emailid">Email</label>
              <input
                type="email"
                id="emailid"
                name="email"
                className="form-control mb-1"
                placeholder="Enter email.."
                value={emailid}
                onChange={manageEmail}
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
                onChange={managePassword}
                
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
export default FormFun;