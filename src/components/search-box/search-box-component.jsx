import React from "react";
import './search-box.styles.css'

export const SearchField = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
