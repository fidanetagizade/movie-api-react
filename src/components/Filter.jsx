import { useState } from "react";
import "./Filter.css"; 

function Filter({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length >= 3) {
      onSearch(inputValue); 
    }
  };

  
  const isTooShort = inputValue.trim().length < 3;


  



  return (
    <form onSubmit={handleSubmit} className="filter-container">
      <input
        type="text"
        className="filter-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        
      />
      <button 
        type="submit" 
        className={`filter-btn ${isTooShort ? "disabled-btn" : ""}`}
        disabled={isTooShort}
      >
        Search
      </button>
    </form>
  );
}

export default Filter;