import React from 'react';
import { useLocation } from 'react-router-dom';

const Contact = () => {
    const location=useLocation();
  return (
    <div> <h1>Ur Email Id is :
    {location.state.email}  </h1>    
    </div>
  )
}

export default Contact;
