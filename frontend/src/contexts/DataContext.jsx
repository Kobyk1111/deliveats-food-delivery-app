/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const DataContext = createContext();

function DataContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [restaurants, setRestaurants] = useState([]);


  // console.log(loggedInUser);

  function logout(){
    setLoggedInUser(null);
  }


  // console.log(data);
  async function getSearchedRestaurants() {
    try {
      const response = await fetch("http://localhost:5002/search/getRestaurants");
      if (response.ok) {
        const data = await response.json();
        setRestaurants(data);
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  // useEffect(() => {
  //   getSearchedRestaurants(); // Fetch restaurants initially
  // }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        loggedInUser,
        setLoggedInUser,
        logout,
        restaurants,
        setRestaurants,
        getSearchedRestaurants,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
