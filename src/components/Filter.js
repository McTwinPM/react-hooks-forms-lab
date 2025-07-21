import React from "react";
import { useState, useEffect } from "react";


function Filter({ onCategoryChange, search, onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState(search);
  useEffect(() => {
    setSearchTerm(search);
  }, [search]);

  function handleSearchChange(event) {
    const newSearch = event.target.value;
    setSearchTerm(newSearch);
    onSearchChange(newSearch);
  }
  return (

    <div className="Filter">
      
      <input
        type="text" placeholder="Search" value={searchTerm} onChange={handleSearchChange}/>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
