/* eslint-disable react/prop-types */
// import { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { DataContext } from "../contexts/DataContext";

// import "../style/Searchbar.css";

// function Searchbar({ className }) {
//   const { setRestaurants } = useContext(DataContext);
//   const [search, setSearch] = useState("");
//   const navigate = useNavigate();

//   async function handleSubmit(e) {
//     e.preventDefault();

//     try {
//       const settings = {
//         body: JSON.stringify({ search }),
//         headers: {
//           "Content-Type": "application/JSON",
//         },
//         method: "POST",
//         credentials: "include",
//       };

//       const response = await fetch(
//         "http://localhost:5002/search/restaurants",
//         settings
//       );

//       if (response.ok) {
//         const data = await response.json();
//         setRestaurants(data);
//         navigate("/search-results");
//       } else {
//         const { error } = await response.json();
//         throw new Error(error.message);
//       }
//     } catch (error) {
//       alert(error.message);
//     }

//     setSearch("");
//   }

//   return (
//     <>

//       <div className="search-container">
//         <form className="search-form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             className="search-input"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           placeholder="eg. Brazilian restaurants in Berlin"
//           />
//           <button className="search-button">Search</button>
//         </form>

//       </div>
//     </>
//   );
// }

// export default Searchbar;

/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";

import "../style/Searchbar.css";

function Searchbar({ className }) {
  const { restaurants, setRestaurants } = useContext(DataContext);
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
      <div className={`${className}`}>
        <div className={`${className} search-container`}>
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}

              placeholder="eg. Brazilian Berlin"

            />
            <button className="search-button">Search</button>
          </form>
          {restaurants.length === 0 && (
            <div className="cities-keywords-greet">
            <p>We are proud to offer our services in <b>Berlin</b>, <b>Düsseldorf</b>, <b>Hannover</b> and <b>Leipzig</b>.</p>
            <p>Search and find your next meal among <b>Albanian, Brazilian, Croatian, French, Ghanaian, Italian, Turkish</b> and <b>Ukrainian</b> restaurants.</p>
    
            </div>
          )}
          
         
        </div>
        
      </div>
    </>
  );
}

export default Searchbar;
