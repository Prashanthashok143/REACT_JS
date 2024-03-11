import { Button } from 'react-bootstrap'
import React from 'react'

const Child = (props) => {
    const submitData=()=>{
       props.parentMessage();
  }
  return (
    <div>
      
    <Button variant="danger" onClick={submitData}>submitData</Button>
  
    </div>
  )
}

export default Child;