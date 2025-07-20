import React from "react";
import { useState } from "react";


function Filter({ onCategoryChange, search, onSearchChange }) {
  // This function handles the search input change
  // and calls the onSearchChange prop with the new value
  // to update the search state in the parent component.
  // It allows the user to filter items based on their search input.
  // The search input is controlled by the value prop.
  // The onChange event handler calls handleSearchChange
  // whenever the user types in the search input field.
  // The search input is used to filter the items displayed in the ShoppingList component.
  // The search input is a controlled component, meaning its value is managed by React state.
  // The onSearchChange prop is a function passed from the parent component
  // that updates the search state in the parent component.
  // The search input is used to filter the items displayed in the ShoppingList component.
  // The search input is a controlled component, meaning its value is managed by React state.
  // The onSearchChange prop is a function passed from the parent component       
  function handleSearchChange(event) {
    onSearchChange(event.target.value);
  }
  return (

    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." value = {search} onChange={handleSearchChange}/>
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
