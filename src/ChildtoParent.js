

import React from 'react';
import { useState } from 'react';

const ChildtoParent= (props) => {
  const [name,setName]=useState("");
  const handler=(e)=>
  {
    setName(e.target.value)
  //  props.handler(e.target.value) // if we dont use handleform use this code
  }
  const handlerForm=(e)=>
  {
    e.preventDefault();
    props.handler(name)
  };
  return (
    <div>
      <form onSubmit={handlerForm}>
      <input type="text" value={name} 
      onChange={handler} 
      placeholder='please enter here'/> 
      <button type='submit'>submit</button>
      </form>

    </div>
  )
}

export default ChildtoParent;
