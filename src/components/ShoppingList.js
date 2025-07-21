import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit, onCategoryChange , search, onSearchChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    onCategoryChange(event);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    if (search && !item.name.toLowerCase().includes(search.toLowerCase())) {

    }

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter search={search} onSearchChange={onSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
