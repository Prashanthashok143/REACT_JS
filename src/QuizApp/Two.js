import React, { useState } from 'react';
import "./QuizApp.css"
import { useNavigate } from 'react-router-dom';

const Two = () => {
  const navigate=useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
   navigate("/three")
  };

  return (
    <div className='Container'>
      <form onSubmit={handleSubmit}>
        <h3>2.What is the purpose of the useState hook in React.js?</h3>
        <label>
          <input
            type="radio"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
          />
To fetch data from an external API
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
          />
          To manage state within functional components
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={handleOptionChange}
          />
To define the structure of a component
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="option4"
            checked={selectedOption === "option4"}
            onChange={handleOptionChange}
          />
       To handle user input
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

export default Two;
