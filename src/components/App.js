import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [onDarkModeClick, setOnDarkModeClick] = useState(false);
  

  function handleDarkModeClick() {
    setOnDarkModeClick((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (onDarkModeClick ? "dark" : "light")}>
      <Header onDarkModeClick={handleDarkModeClick} mode={onDarkModeClick}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
