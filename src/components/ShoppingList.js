import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit, onCategoryChange , search, onSearchChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const handleSearchChange = onSearchChange || (() => {});


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    onCategoryChange(event);
  }

  const itemsToDisplay = items.filter((item) => {
    const matchesCategory =
    selectedCategory === "All" || item.category === selectedCategory;
  const matchesSearch =
    !search || item.name.toLowerCase().includes(search.toLowerCase());
  return matchesCategory && matchesSearch;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter search={search} onSearchChange={handleSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
