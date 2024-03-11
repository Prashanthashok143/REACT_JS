import React from "react";
import PropTypes from 'prop-types';



function Callinfun(props)
{
    

    return (
        <div>
        <h1>My Name is Prashanth</h1>  
       
        </div>
    )
}
Callinfun.defaultProps={
    name:"Shanigarapu"
}
Callinfun.propTypes={
name:PropTypes.string.isRequired,
}
export default Callinfun;