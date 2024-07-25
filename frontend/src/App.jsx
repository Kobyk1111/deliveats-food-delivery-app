import "./App.css";
import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import SearchResults from "./pages/SearchResults";
import RestaurantMenu from "./pages/RestaurantMenu";
import SuccessPage from "./components/SuccessPage";
import BasketPage from "./components/BasketPage";
import Profile from "./pages/Profile";
import Preferences from "./components/Preferences";
import Addresses from "./components/Addresses";
import OrderHistory from "./components/OrderHistory";
import Settings from "./components/Settings";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "./contexts/DataContext";
import { BounceLoader } from "react-spinners";
import ProtectedRouteLoggedInUser from "./components/ProtectedRouteLoggedInUser";
// import RestaurantHome from "./pages/RestaurantHome";

// RESTAURANT SIDE
import RSRegisterPage from "./pages/RSRegisterPage";
import RSHomePage from "./pages/RSHomePage";
import RSOrdersActive from "./components/RSOrdersActive";
import RSOrdersHistory from "./components/RSOrdersHistory";
import RSMenu from "./components/RSMenu";
import RSProfile from "./components/RSProfile";

function App() {
  const { setLoggedInUser, handleHTTPRequestWithToken, loggedInRestaurant } =
    useContext(DataContext);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    async function checkAuthentication() {
      try {
        const response = await handleHTTPRequestWithToken(
          "http://localhost:5002/users/check-auth",
          {
            credentials: "include",
          }
        );

        if (response.ok) {
          const user = await response.json();
          setLoggedInUser(user);
        } else {
          setLoggedInUser(null);
          const { error } = await response.json();

          if (!isInitialLoad) {
            throw new Error(error.message);
          }
        }
      } catch (error) {
        if (!isInitialLoad) {
          // alert(`Your session has expired! ${error.message}`);
          console.log(`Your session has expired! ${error.message}`);
        }
      } finally {
        setTimeout(() => {
          setIsInitialLoad(false); // Mark initial load as complete after delay
        }, 500); //
      }
    }

    checkAuthentication();
  }, []);

  if (isInitialLoad) {
    return (
      <div className="loading-spinner">
        <BounceLoader color={"#5f71ad"} loading={isInitialLoad} size={40} />
      </div>
    ); // Show the spinner while checking authentication
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/restaurant/:id" element={<RestaurantMenu />} />
        <Route path="/BasketPage" element={<BasketPage />} />
        <Route path="/success" element={<SuccessPage />} />
        {/* <Route path="/restaurantHome" element={<RestaurantHome />} /> */}

        <Route
          path="/profile/*"
          element={
            <ProtectedRouteLoggedInUser>
              <Profile />
            </ProtectedRouteLoggedInUser>
          }
        >
          <Route index element={<Preferences />} />
          <Route path="preferences" element={<Preferences />} />
          <Route path="addresses" element={<Addresses />} />
          <Route path="order-history" element={<OrderHistory />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* ******** restaurant Routes ******** */}

        <Route
          path="/rs-register"
          element={
            loggedInRestaurant ? (
              <Navigate to="/rs-home/*" />
            ) : (
              <RSRegisterPage />
            )
          }
        />
        <Route
          path="/rs-home/*"
          element={
            loggedInRestaurant ? <RSHomePage /> : <Navigate to="/rs-register" />
          }
        >
          <Route index element={<RSOrdersActive />} />
          <Route path="orders-active" element={<RSOrdersActive />} />
          <Route path="orders-history" element={<RSOrdersHistory />} />
          <Route path="menu" element={<RSMenu />} />
          <Route path="profile" element={<RSProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
