/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext();

function DataContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const [sessionId, setSessionId] = useState(
    JSON.parse(localStorage.getItem("sessionId")) || ""
  );
  const [userOrderHistory, setUserOrderHistory] = useState([]);
  const [showPassword, setShowPassword] = useState(false); // state variable for password visibility
  const [loggedInRestaurant, setLoggedInRestaurant] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (restaurant) {
      localStorage.setItem("restaurant", JSON.stringify(restaurant));
    } else {
      localStorage.removeItem("restaurant");
    }
  }, [restaurant]);

  // OrderHistory.jsx and Preferences.jsx
  useEffect(() => {
    async function getOrderHistory() {
      try {
        const response = await fetch(
          `http://localhost:5002/create-checkout-session/getOrderHistory/${loggedInUser.id}`
        );

        if (response.ok) {
          const { orderHistory } = await response.json();
          setUserOrderHistory(orderHistory);
        } else {
          const { error } = await response.json();
          throw new Error(error.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    if (loggedInUser) {
      getOrderHistory();
    }
  }, [loggedInUser, setUserOrderHistory]);

  async function logout() {
    try {
      const response = await fetch("http://localhost:5002/logout/user", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        const { message } = await response.json();
        alert(message);
        setLoggedInUser(null);
        navigate("/");
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  }

  async function logoutRestaurant() {
    try {
      const response = await fetch("http://localhost:5002/logout/restaurant", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        const { message } = await response.json();
        alert(message);
        setLoggedInRestaurant(null);
        navigate("/rs-register");
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
      const response = await fetch(
        "http://localhost:5002/search/getRestaurants"
      );
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

      const refreshResponse = await fetch(
        "http://localhost:5002/refresh-token",
        { credentials: "include" }
      );

      if (refreshResponse.ok) {
        console.log("New tokens received");

        const secondAccessResponse = await fetch(url, settings);
        return secondAccessResponse;
      } else {
        return refreshResponse;
      }
    }
  }

  // function to handle password visibility toggle
  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }
  // useEffect(() => {
  //   async function getOrderHistory() {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:5002/create-checkout-session/getOrderHistory/${loggedInUser.id}`
  //       );

  //       if (response.ok) {
  //         const { orderHistory } = await response.json();
  //         setUserOrderHistory(orderHistory);
  //       } else {
  //         const { error } = await response.json();
  //         throw new Error(error.message);
  //       }
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }

  //   if (loggedInUser) {
  //     getOrderHistory();
  //   }
  // }, [loggedInUser]);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        loggedInUser,
        setLoggedInUser,
        logout,
        showPassword,
        setShowPassword,
        togglePasswordVisibility,
        restaurants,
        setRestaurants,
        getSearchedRestaurants,
        sessionId,
        setSessionId,
        handleHTTPRequestWithToken,
        restaurant,
        setRestaurant,
        userOrderHistory,
        setUserOrderHistory,
        loggedInRestaurant,
        setLoggedInRestaurant,
        logoutRestaurant,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
