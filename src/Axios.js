import { Button, Table } from 'react-bootstrap'
import React, {useState } from 'react'
import axios from 'axios'


const Axios = () => {
    const[value,setValue]=useState("")
    const [data,setData]=useState([])
    // useEffect(()=>{
    //     axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>setData(response.data)).catch((error)=>console.log(error))
    // })
    const getData=()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${value}`).then((response)=>
            response.data.length >= 1? (setData(response.data)):(setData([response.data]))).catch((error)=>console.log(error))

    }
  
  return (

    <div>
        Axios
     <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />

     <Button variant="success" type="submit" onClick={getData}>FetchingData</Button>
    
       {data.length >0 &&<Table striped bordered hover size="sm">
       <thead>
         <tr>
           <th>#ID</th>
           <th>UserId</th>
           <th>Title</th>
         </tr>
       </thead>
       <tbody>
       {data.map(({id,userId,title})=>(
         <tr key={id}>
             <td>{id}</td>
             <td>{userId}</td>
             <td>{title}</td>
         </tr>
       ))}
       </tbody>
       </Table> }

        
        
      </div>
  )
}

export default Axios