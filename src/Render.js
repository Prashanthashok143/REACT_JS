import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import TODO from './Pages/TODO';
import  About from "./Pages/About"
import Contact from "./Pages/Contact";
import Layout from './Pages/Layout';
import Nopage from "./Pages/Nopage";
import Login from './Pages/Login';
import Home from './Pages/Home';
export const PagesValues=createContext(null)

const Render = () => {
    const [auth,setAuth]=useState(false);
    const valuesPassing={auth,setAuth}
  return (
    <div>
    <PagesValues.Provider value={valuesPassing}>
    
   <BrowserRouter>
   <Layout/>
 <Routes>
 <Route path="/" element={<Home />} />
{
    auth && (
        <>
          <Route path="/todo" element={<TODO />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        </>
    )
}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Nopage />} /> 
   </Routes>
   </BrowserRouter>    
    </PagesValues.Provider>    
    </div>
  )
}

export default Render