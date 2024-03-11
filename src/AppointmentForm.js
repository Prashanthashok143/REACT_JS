import React from "react";
import { useState } from "react"
import "./AppointmentForm.css"

const AppointmentForm = () => {
    const [time, setTime] = useState("AM");
    const [error,setError]=useState([]);
    const handleChange = (event) => {
 setTime(event.target.value)
    }
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    gender:"",
    contact:"",
    email:"",
    date:"",
    address:"",
    hour:"",
   
  });
  const handleChanges = (event) => {
    console.log(event)
    const { name, value } = event.target;
    setFormData({...formData, [name]: value });
  
  };
  const submitData=(event)=>{
    const {fname,lname,gender,contact,email,date,address,hour}=formData;
    event.preventDefault();
    setError(`Firstname:${fname}
     Lastname:${lname}
    Gender:${gender}
    Contact:${contact}
    Email:${email}
    Date:${date} ${hour} ${time}
    Address:${address}`)
  

  }

  return (
    <div className="border w-50 m-auto p-3 mt-5">
     <h1>AppointmentForm</h1>
      <form className="container">
      <div className="Names">
      <label htmlFor="fname">Firstname
        <input type="text" name="fname" value={formData.fname} onChange={handleChanges} />
        </label>
        <label htmlFor="lname">Lastname
        <input type="text" name="lname" value={formData.lname} onChange={handleChanges} />
        </label>
      </div>

      <div className="contact">
<label htmlFor="contact">Phone no
  <input type="tel" value={formData.contact}  onChange={handleChanges} name="contact" id="contact"/>
</label>
<label htmlFor="email">email
  <input type="email" value={formData.email} onChange={handleChanges} name="email" id="email"/>
</label>

        </div> 
      <div className="Agedetails">
      <label htmlFor="male">
              Male
              <input
                type="radio"
                id="male"
                
           name="gender"
                value="male"
                checked={formData.gender==="male"}
                onChange={handleChanges}
             />
              </label>
              <label htmlFor="Female">
              Female
              <input
                type="radio"
                id="Female"
                
           name="gender"
                value="Female"
                checked={formData.gender==="Female"}
                onChange={handleChanges}
             />
              </label>
            
            <label htmlFor="Age"> Age:
            <input type="number" id ="Age" name="age"/>
            </label>
           
          </div>
          <div className="timings">
          <label> Slot:
              <input  type="date" value={formData.date} name="date" onChange={handleChanges} placeholder="Date"/>
            </label>
            <input type="text" value={formData.hour} name="hour" onChange={handleChanges} placeholder="Time"/>
            <select value={time} onChange={handleChange}>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
          <option value="Any">Any</option>
        </select>

          </div>
          <label htmlFor="address">
            Address
          </label>
          <input type="text"value={formData.address} onChange={handleChanges} name ="address" className="w-100"/>
        <button onClick={submitData}>Book AppointmentForm</button>
      </form>
     <div>
      <h1> {error}</h1>
     </div>
    </div>

  );
};

export default AppointmentForm;
