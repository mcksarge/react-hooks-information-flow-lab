import React, { useState } from "react";

function Header({ isDarkMode }) {


    
    console.log(isDarkMode ? "dark" : "light")
    return (
        <header>
          <h2>Shopster</h2>
          <button onClick={isDarkMode}>
            {isDarkMode} Mode
          </button>
        </header>
    );
  }

  export default Header