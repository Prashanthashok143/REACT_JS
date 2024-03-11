import React, { useState } from 'react';
import "./QuizApp.css"
import { useNavigate } from 'react-router-dom';

const Three = () => {
  const navigate=useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
   navigate("/four")
  };

  return (
    <div className='Container'>
      <form onSubmit={handleSubmit}>
        <h3>3.What does JSX stand for in React.js?</h3>
        <label>
          <input
            type="radio"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
          />
      JavaScript XML
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
          />
         JavaScript Extension
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={handleOptionChange}
          />
      JavaScript Executor
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="option4"
            checked={selectedOption === "option4"}
            onChange={handleOptionChange}
          />
 JavaScript External
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

export default Three;
