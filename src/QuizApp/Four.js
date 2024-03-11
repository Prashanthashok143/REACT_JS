import React, { useState } from 'react';
import "./QuizApp.css"
import { useNavigate } from 'react-router-dom';

const Four = () => {
  const navigate=useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
   navigate("/five")
  };

  return (
    <div className='Container'>
      <form onSubmit={handleSubmit}>
        <h3>4.What is a prop in React.js?</h3>
        <label>
          <input
            type="radio"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
          />
      A component's internal state
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
          />
       A method for creating custom HTML elements
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={handleOptionChange}
          />
  An argument passed to a component
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="option4"
            checked={selectedOption === "option4"}
            onChange={handleOptionChange}
          />
         A type of CSS selector
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

export default Four;
