import React, { useState } from 'react';
import "./QuizApp.css"
import { useNavigate } from 'react-router-dom';

const Five = () => {
  const navigate=useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
   navigate("/thankyou")
  };

  return (
    <div className='Container'>
      <form onSubmit={handleSubmit}>
        <h3>5.What is the virtual DOM in React.js?</h3>
        <label>
          <input
            type="radio"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
          />
     A virtual reality interface
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
          />
    A tool for creating animations
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={handleOptionChange}
          />
      A lightweight representation of the actual DOM
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="option4"
            checked={selectedOption === "option4"}
            onChange={handleOptionChange}
          />
     A method for handling user interactions
        </label>
        <br />
        <br />
        <br />
        <button className='btn btn-success' type="submit" disabled={!selectedOption}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Five;
