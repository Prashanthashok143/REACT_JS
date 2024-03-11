import React from "react";
const Details=[
   {
   id:1234,
   name:"prashanth",
   phoneno:9603049161,
   State:"Ts"
   },
   {
      id:5678,
      name:"Ashok",
      phoneno:9603040784,
      State:"Ts"
      },
      {
         id:34256,
         name:"Shirisha",
         phoneno:1234456780,
         State:"Ts"
         },
         {
            id:8976,
            name:"Vikranth",
            phoneno:8179556208,
            State:"Ts"
            }
];

const Tabledata= () =>{
   return(
   <div>
    <h1>Details of Students</h1>
     <table className="table">
     <thead className="table-primary">
     <tr>
     <th>Id</th> 
     <th>Name</th>
     <th>Phone Number</th> 
     <th>State</th> 
    </tr>   
    </thead> 
    <tbody> 
    
  {Details.length>0?(   Details.map(({id,name,phoneno,State})=>(
<tr className="table-danger">  
    <td>{id}</td>  
    <td>{name}</td>
    <td>{phoneno}</td>
    <td>{State}</td>
</tr>))):(<td colSpan={5} style={{textAlign:"center"}}>No Details Found</td>)}
       
    </tbody>  
    </table>
   </div>
   )
}
export default Tabledata;
// if we dont pass the values{id,name etc} in callbck (map) function .
// we passed value or anyone i,e vlaue example we have to call like value.id
// value.name etc