import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Myserver = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [data, setData] = useState([]);
  const navigate =useNavigate();

  useEffect(()=>{
     BackendData();

  })

  const BackendData = () => {
    axios
      .get(`http://localhost:3001/posts`)
      .then((response) => setData(response.data) )
      .catch((error) => console.log(error));
  };

  const getData = () => {
    if (value1 === "" || value2 === "") {
      alert("enter the values");
    } else {
      const Data = { title: value1, author: value2 };
      axios
        .post(`http://localhost:3001/posts`, Data)
        .then((response) => {
          console.log(response);
          setValue1("");
          setValue2("");
          BackendData();
        })
        .catch((error) => console.log(error));
    }
  };
  const Delete = (id) => {
    axios
      .delete(`http://localhost:3001/posts/${id}`)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
    BackendData();
  };
  const Edit=(id,title,author)=>{
    navigate(`/myserver/${id}`,{
      state:{
        id,
        title,
        author
      }
    })
    // axios
    // .put(`http://localhost:3001/posts/${id}`,{title:value1,author:value2})
    // .then((response) => console.log(response.data))
    // .catch((error) => console.log(error));
  }

  return (
    <div>
      <input
        type="text"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />
      <input
        type="text"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
      <Button variant="success" type="submit" onClick={getData}>
        FetchingData
      </Button>
      {data.length > 0 && (
        <Table style={{ textAlign: "center" }} striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#ID</th>
              <th>Director</th>
              <th>Title</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, title, author }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{author}</td>
                <td>{title}</td>
                <td>
                  <Button variant="dark" onClick={()=> Edit(id,title,author)}>Edit</Button>
                </td>
                <td>
                  {" "}
                  <Button variant="danger" onClick={() => Delete(id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Myserver;
