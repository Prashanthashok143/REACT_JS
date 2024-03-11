import axios from "axios";
import React, {  useState } from "react";
import Child from "./Child";
import { Table } from "react-bootstrap";


const Parent = () => {
  const [data, setData] = useState([]);

  const ChildData=()=>{
    handleData();
  }
  const handleData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
   {data.length >0 &&      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#ID</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
      {data.map(({id,title})=>(
        <tr key={id}>
            <td>{id}</td>
            <td>{title}</td>
        </tr>
      ))}
      </tbody>
      </Table> }
    
      <Child parentMessage={ChildData}/>
      
    </div>
  );
};

export default Parent;
