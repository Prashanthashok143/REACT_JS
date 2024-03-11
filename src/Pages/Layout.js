import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { PagesValues } from "../Render";
const Layout = () => {
  const {auth}=useContext(PagesValues)
  return (
    <div>
      
      <li>
            <Link to="/">Home</Link>
          </li>
      {
        auth && (
          <>
           <li>
            <Link to="/todo">TODO</Link>
          </li>
         
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          </>
        )
      }
         
          <li>
            <Link to="/login">Login</Link>
          </li>
    

 
    </div>
  )
};

export default Layout;
