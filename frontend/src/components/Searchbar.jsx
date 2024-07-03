import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";

function Searchbar() {
  const { setRestaurants } = useContext(DataContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const settings = {
        body: JSON.stringify({ search }),
        headers: {
          "Content-Type": "application/JSON",
        },
        method: "POST",
        credentials: "include",
      };

      const response = await fetch("http://localhost:5002/search/restaurants", settings);

      if (response.ok) {
        const data = await response.json();
        setRestaurants(data);
        navigate("/search-results");
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      alert(error.message);
    }

    setSearch("");
  }

  return (
    <>
      <div className="search-container">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="type the kind of food and city eg. Italian food, Berlin"
          />
          <button className="search-button">Search</button>
        </form>
      </div>
    </>
  );
}

export default Searchbar;
