import React from "react";
import "./funComp.css"
const h2colors={color:"blue",backgroundColor:"yellow",display:"inline-block" }




class Praticesdng extends React.Component{
    
    
    render()
    {
     return(
         <div>
         
             <h1>Namaste</h1>
             <h1>Prashanth Ela unnava</h1>
             <h1>{this.props.created}</h1>
         </div>
     )
    }
 
 }
 export default Praticesdng;



export function Funcomp(props)
{
return (
    
    <div>
        <h1 style={{color:"red",backgroundColor:"Green",display:"inline-block"}}>Hello function</h1>
        <h2 style={h2colors}>My name is {props.name} age is {props.age}</h2>
        
    </div>
)    
}

export function Extra({name,age,village})
{
    return(
        <div>
       <h1 className="unknown">  {name} {age} {village} </h1>
        </div>
    )
}