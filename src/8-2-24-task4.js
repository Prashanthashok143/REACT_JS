import React from "react";
function ListofItems()
{
    const listitems=[1,2,3,4,5,6,7,8,9,11,12,13,14
    ];
    return(
        <div>
     <h1>ListofItems</h1>
    <ul>
   {                          // if we want use js in middle html ,we use {} 
   listitems.map(
    (value,index)=>
   { 
   return <li key={index}>{value}</li>
   }
    )
    }
     
   </ul> 
        </div>
   )
};
export default ListofItems;
 
// if we want use condtions
// {listitems.length>0? (<ul>
//     {listitems.map((value,index)=>(  // if we dont want to use return then no need to use {}
//         <li key={index}>{value}</li>
//     ))}
// </ul>):(<h1>no items</h1>)} 