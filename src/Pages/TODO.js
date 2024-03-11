import React, { useState, useEffect } from "react";
import axios from "axios";

const TODO = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [title,setTitle] = useState("");
  const [director,setDirector]=useState("");
  // const [editid,setEditid]=useState(-1);

  useEffect(() => {
    BackendData();
  }, []);
  const BackendData = () => {
   
    axios
      .get(`http://localhost:3001/comments`)
      .then((result) => {
        setData(result.data);
        setError("");
      })
      .catch((errormsg) => {
        setData(console.log(errormsg));
      });
  };
  const handlenewmovie = (event) => {
    event.preventDefault();

    const formData = { "movie":title , "Director":director };
    axios
      .post(`http://localhost:3001/comments`, formData)
      .then((result) => {console.log(result);
         BackendData();
         setTitle("");
         setDirector("");
        })
      .catch((error) => {console.log(error)});
  };
 const handleDelet=(id)=>{
  axios
  .delete(`http://localhost:3001/comments/${id}`)
  .then((result) => {
  console.log(result);
  BackendData();

  })
  .catch((errormsg) => {
  console.log(errormsg);
  });
 }
//  const handleEdit=(id)=>{
//   axios
//   .patch(`http://localhost:3001/comments/${id}`)
//   .then((result) => {
//   console.log(result);
//   BackendData();

//   })
//   .catch((errormsg) => {
//   console.log(errormsg);
//   });
//  }
// const handleEdit=(id)=>{
// setEditid(id)
// }
  return (
    <div>
  <form onSubmit={handlenewmovie}>
     <label>Title</label> 
   <input type="text" id="nam1" value={title} onChange={(e)=>setTitle(e.target.value)}/>   
   <label>Director</label> 
   <input type="text" id="name2" value={director} onChange={(e)=>setDirector(e.target.value)}/>  
      <button type="submit">
        Add
      </button>
    </form>
      {data?.length !== 0 ? (
        
        <table style={{ border: "solid" }}>
          <thead>
            <tr style={{ border: "solid", textAlign: "center" }}>
              <td style={{ border: "solid" }}>Id</td>
              <td style={{ border: "solid" }}>Title</td>
              <td style={{ border: "solid" }}>Url</td>
              <td style={{ border: "solid" }} colSpan={2}>
                options
              </td>
            </tr>
          </thead>
          <tbody>
            {data.map(({id, movie, Director }) => (
            
              <tr key={id} style={{ border: "solid", textAlign: "center" }}>
                <td style={{ border: "solid" }}>{id}</td>
                <td style={{ border: "solid" }}>{movie}</td>
                <td style={{ border: "solid" }}>{Director}</td>
                <td>
                <button>Edit</button>
                </td>
                <td>  
                  <button onClick={()=> handleDelet(id)}>Delete</button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
        
      ) : (
        <h1>{error}</h1>
      )}
    </div>
  );
};

export default TODO;
