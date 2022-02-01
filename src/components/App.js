import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const lightDark = isDarkMode

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
    console.log(isDarkMode)
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={handleDarkModeClick}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
