import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import './styles/FilterButton.css';

const FilterButton = ({ label, options, selectedOptions, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="filter-button">
      <button 
        style={{fontSize:`12px`}}
        className="filter-trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <IoIosArrowDown />
      </button>
      
      {isOpen && (
        <div className="filter-menu">
          <div className="filter-menu-content">
            {options.map((option) => (
              <button
                key={option}
                className="filter-option"
                onClick={() => {
                  const newSelection = selectedOptions.includes(option)
                    ? selectedOptions.filter((item) => item !== option)
                    : [...selectedOptions, option];
                  onChange(newSelection);
                }}
              >
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  className="filter-checkbox"
                  readOnly
                />
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
