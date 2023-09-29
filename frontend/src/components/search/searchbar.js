import React from "react";
import "./searchbar.css";

const Searchbar = () => {
  return (
    <div>
      <div class="search-box">
        <button class="btn-search">
          <i class="fas fa-search"></i>
        </button>
        <input
          type="text"
          class="input-search"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default Searchbar;
