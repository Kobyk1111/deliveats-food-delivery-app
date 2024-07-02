import { createContext, useState } from "react";

export const DataContext = createContext();

function DataContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  console.log(data);

  return (
    <DataContext.Provider
      value={{ data, setData, loggedInUser, setLoggedInUser }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
