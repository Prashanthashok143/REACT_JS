import React,{useState,useEffect, useContext} from "react";
import { PagesValues } from "../Render";
import { useNavigate } from "react-router-dom";

const Signup=()=>{
    const {setAuth}=useContext(PagesValues)
    const navigate=useNavigate();
    const [formData,setFormData]=useState(
        {
            firstname:"",
            lastname:"",
            gender:"",
            agree:false,
        }
    )
    const changeDetails=(event)=>
    {
const{ name,value,checked,type}=event.target;
const result=type==="checkbox"? checked:value;
setFormData({...formData,[name]:result})
    };
    const[isForm,setIsForm]=useState(false);
    const submitForm=(event)=>
    {
        event.preventDefault();
        setAuth(true)
        navigate("/")
    }
    useEffect(()=>
    {
  const{firstname,lastname,gender,agree}=formData;
  setIsForm(firstname && lastname && gender&& agree)
    },[formData])
  
    return (
        <div className="border w-25 m-auto p-3 mt-5">
          <form onSubmit={submitForm}>
            <h2 className="text-primary text-center ">Signup Form</h2>
            <div>
              <label htmlFor="firstname">FirstName</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                className="form-control mb-1"
                placeholder="Enter FirstName.."
                value={formData.firstname}
                onChange={changeDetails}
              />
              <label htmlFor="lastname" className="mt-3">
                LastName
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                className="form-control mb-1"
                placeholder="Enter Lastname.."
                value={formData.lastname}
                onChange={changeDetails}
             />
              <label htmlFor="male" className="mt-3">
              Male
              <input
                type="radio"
                id="male"
                
           name="gender"
                value="male"
                checked={formData.gender==="male"}
                onChange={changeDetails}
             />
              </label>
              <label htmlFor="female" className="mt-3">
              Female
              <input
                type="radio"
                id="female"
               
           name="gender"
                value="Female"
                checked={formData.gender==="Female"}
                onChange={changeDetails}
             />
              </label>
            
            <label htmlFor="agree">
            <input type="checkbox"
            name="agree"
            id="agree"
            checked={formData.agree}
            onChange={changeDetails}
            />
            please Check it if u confirm the details
            </label>

              
              <button disabled={!isForm} type="submit" className="btn btn-primary mt-4 ">
                Login
              </button>
            </div>
          </form>
           
        </div>
      );
}
export default Signup;