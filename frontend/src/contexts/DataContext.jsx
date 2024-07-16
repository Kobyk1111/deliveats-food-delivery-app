/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const DataContext = createContext();

function DataContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const [sessionId, setSessionId] = useState(JSON.parse(localStorage.getItem("sessionId")) || "");

  async function logout() {
    try {
      const response = await fetch("http://localhost:5002/logout", { method: "POST", credentials: "include" });

      if (response.ok) {
        const { message } = await response.json();
        alert(message);
        setLoggedInUser(null);
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  }

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

  async function handleHTTPRequestWithToken(url, settings) {
    const firstAccessResponse = await fetch(url, settings);

    if (firstAccessResponse.ok) {
      return firstAccessResponse;
    } else {
      let error;
      try {
        const responseClone = firstAccessResponse.clone();
        error = await responseClone.json();
      } catch (err) {
        console.log("Failed to parse JSON response", err);
      }

      if (error.status !== 401) {
        return firstAccessResponse;
      }

      console.log("Access Token has expired");

      const refreshResponse = await fetch("http://localhost:5002/refresh-token", { credentials: "include" });

      if (refreshResponse.ok) {
        console.log("New tokens received");

        const secondAccessResponse = await fetch(url, settings);
        return secondAccessResponse;
      } else {
        return refreshResponse;
      }
    }
  }

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
        sessionId,
        setSessionId,
        handleHTTPRequestWithToken,
        restaurant,
        setRestaurant,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
