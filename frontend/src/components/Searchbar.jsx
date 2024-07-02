import React from "react";

function Searchbar() {
  return (
    <>
      <div className="search-container">
        <form className="search-form">
          <input type="text" className="search-input" />
          <button className="search-button">Search</button>
        </form>
      </div>
    </>
  );
}

export default Searchbar;
