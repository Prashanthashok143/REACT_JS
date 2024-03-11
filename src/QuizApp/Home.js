import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "./QuizApp.css"

const Home = () => {
  const navigate=useNavigate();
  const SubmitData=()=>{
   navigate("/one")
  }
return (
  <div className='Container'>
   <h1> Welcome to the React.js quiz!</h1>
     React.js is a popular JavaScript library for building user interfaces. This quiz will test your knowledge of React.js concepts, principles, and best practices. Whether you're a beginner or an experienced developer, this quiz will help you gauge your understanding of React.js and identify areas for improvement. 
   <br/>
  <Button variant='primary' onClick={SubmitData}>Submit</Button>
  </div>
)
}

export default Home