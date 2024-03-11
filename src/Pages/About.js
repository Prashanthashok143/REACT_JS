import React, { useState } from "react";
import axios from "axios";

const About = () => {
  const [data, setData] = useState([]);
  const [postId, setPostId] = useState("");
  const [error,setError]=useState("");

  // useEffect(()=>{
  //     BackendData();
  // },[])
  const BackendData = (event) => {
    event.preventDefault();
   if(postId)
   {
    axios
    .get(`https://jsonplaceholder.typicode.com/photos/`,{     // if want to get using by id ,add ${postId}
      params:{
        _limit:postId,
      }  // params will return the top10,top ofthe given value in input
    }) //?albumId  add before ${postId},returns only albumnid all
    .then((result) => {
      result.data?.length>=1 ? setData(result.data):setData([result.data]
      );       // if we get only single value passed as array []
      setError("")
      
    })
    .catch((errormsg) => {
      setData(console.log(errormsg));
    });
   }
   else{
setError(alert("please give the valid address"))
   }
  };

  return (
    <div>
      <h1>List of times from Fake API</h1>

      <form>
        <input
          type="text"
          value={postId}
          id="postId"
          onChange={(event) => setPostId(event.target.value)}
        />
        <button type="submit" onClick={BackendData}>
          fetch the data
        </button>
      </form>

      {data?.length !== 0 ? (
        <table style={{ border: "solid" }}>
          <thead>
            <tr style={{ border: "solid", textAlign: "center" }}>
              <td style={{ border: "solid" }}>Id</td>
              <td style={{ border: "solid" }}>Title</td>
              <td style={{ border: "solid" }}>Url</td>
              <td style={{ border: "solid" }}>Thumbnail</td>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, title, url, thumbnailUrl }) => (
              <tr style={{ border: "solid", textAlign: "center" }}>
                <td style={{ border: "solid" }}>{id}</td>
                <td style={{ border: "solid" }}>{title}</td>
                <td style={{ border: "solid" }}>{url}</td>
                <td style={{ border: "solid" }}>{thumbnailUrl}</td>
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

export default About;
