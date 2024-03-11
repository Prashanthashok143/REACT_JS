import React, { createContext, useState } from 'react'
import ComponentB from './ComponentB';

export const ComponentContext=createContext(null);

const ComponentA = () => {
    const [name,setName]=useState("");
    const [name2,setName2]=useState("");
    const  ComponentContextvalues={name,setName,name2,setName2};
    
  return (
    <ComponentContext.Provider value={ComponentContextvalues}>
        <div>
        Email address: {name}
        <ComponentB/>
        </div>
    </ComponentContext.Provider>
  )
}

export default ComponentA