import React, { useState } from 'react';
import "./QuizApp.css"
import { useNavigate } from 'react-router-dom';

const One = () => {
  const navigate=useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
   navigate("/two")
  };

  return (
    <div className='Container'>
      <form onSubmit={handleSubmit}>
        <h3>1.What is React.js primarily used for?</h3>
        <label>
          <input
            type="radio"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
          />
       Backend development
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
          />
          Mobile app development
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={handleOptionChange}
          />
         Building user interfaces
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="option4"
            checked={selectedOption === "option4"}
            onChange={handleOptionChange}
          />
         Database management
        </label>
        <br />
        <br />
        <br />
        <button type="submit" className='btn btn-success' disabled={!selectedOption}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default One;
