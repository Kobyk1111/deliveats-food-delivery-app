import { DataContext } from "../contexts/DataContext";
import { useContext } from "react";

function SearchResults() {
  const { restaurants } = useContext(DataContext);

  console.log(restaurants);
  return (
    <div>
      {restaurants.map((restaurant) => {
        return (
          <div key={restaurant.id} style={{ marginBottom: "3rem" }}>
            <p>{restaurant.name}</p>
            <p>{restaurant.address}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SearchResults;
