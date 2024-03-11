import React, { useState } from 'react'
import ChildtoParent from './ChildtoParent';

const ParentoChild = () => {
  const [name,setName]=useState("");
  const handler=(value)=>{
      setName(value)
  }
  return (
   <div>
    <h2>Name from child:{name}</h2>
     <ChildtoParent handler={handler}/> 
    </div>
  )
}

export default ParentoChild;


// //Name:{name}
//<input type="text" value={name} onChange={handler}/>
