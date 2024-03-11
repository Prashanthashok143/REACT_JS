import React from 'react';
import "./QuizApp.css"
import { useNavigate } from 'react-router-dom';

const Thankyou = () => {
    const navigate=useNavigate();
const submitData=()=>{
    navigate("/")
}
  return (
    <div className='Container'>

     Thank you for taking the time to participate in the quiz! 
<button className='btn btn-danger' type="submit" onClick={submitData}>
          Submit
        </button>
    </div>
  )
}

export default Thankyou