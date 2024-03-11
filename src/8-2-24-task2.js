import React, { useState } from "react";

function Callinfun()
{
    const [backgroundColor,setBackgroundColor]= useState('white');
   

    const changeColor = () => {
        setBackgroundColor(`#${Math.random().toString().slice(-6)}`);
    }

return (
        <div style={{ backgroundColor: backgroundColor,padding: "20px"}}>
        <h1>My Name is Prashanth</h1>  
        <button onClick={changeColor}>CLick On</button>  
        </div>
    );





};
export default Callinfun;