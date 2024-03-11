import axios from 'axios'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'

const Myserveredit = () => {
    const location=useLocation();
    const {id,title,author}=location.state;
    const [todovalue,setTodovalue]=useState(author)
    const [todovalue2,setTodovalue2]=useState(title)
  console.log(location.state)
    const navigate=useNavigate();

    const UpdateValue=()=>{
        axios
        .put(`http://localhost:3001/posts/${id}`,{title:todovalue2,author:todovalue})
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
        navigate("/myserver")
    }
  return (
    <div>
        <input type="text" value={todovalue} onChange={(e)=>setTodovalue(e.target.value)}/>
        <input type="text" value={todovalue2} onChange={(e)=>setTodovalue2(e.target.value)}/>
        <Button onClick={UpdateValue}>Update</Button>
    </div>
  )
}

export default Myserveredit