import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import SearchResults from "./pages/SearchResults";
import RestaurantMenu from "./pages/RestaurantMenu";
import SuccessPage from "./components/SuccessPage";
import BasketPage from "./components/BasketPage";


import Profile from "./pages/Profile";
import Preferences from "./components/Preferences";
import Addresses from "./components/Addresses";
import OrderHistory from "./components/OrderHistory";
import Settings from "./components/Settings";




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/restaurant/:id" element={<RestaurantMenu />} />
        <Route path="/BasketPage" element={<BasketPage />} />
        {/* //SOLVE */}
        <Route path="/success" element={<SuccessPage />} />

        <Route path="/profile/*" element={<Profile />}>
          <Route path="preferences" element={<Preferences />} />
          <Route path="addresses" element={<Addresses />} />
          <Route path="order-history" element={<OrderHistory />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
