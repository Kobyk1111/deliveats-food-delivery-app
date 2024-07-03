/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const DataContext = createContext();

function DataContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  console.log(loggedInUser);

  // console.log(data);

  return (
    <DataContext.Provider value={{ data, setData, loggedInUser, setLoggedInUser, restaurants, setRestaurants }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
