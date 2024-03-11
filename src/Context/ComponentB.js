import React, { useContext } from 'react'
import { ComponentContext } from './ComponentA'
import { Form } from 'react-bootstrap'

const ComponentB = () => {
    const {name,setName,name2,setName2}=useContext(ComponentContext)
  return (
    <div>Password :{name2}



        <Form className='w-25'>
      <Form.Group  controlId="formBasicEmail">
     
        <Form.Control className='mt-4' type="email" placeholder="Enter email" value={name} onChange={(e)=>setName(e.target.value)} />
        
      </Form.Group>

      <Form.Group className="mt-3" controlId="formBasicPassword">
     
        <Form.Control type="password" placeholder="Password" value={name2} onChange={(e)=>setName2(e.target.value)} />
      </Form.Group>
      </Form>
    </div>
  )
}

export default ComponentB