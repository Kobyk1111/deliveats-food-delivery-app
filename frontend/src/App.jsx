import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import SearchResults from "./pages/SearchResults";
import RestaurantMenu from "./pages/RestaurantMenu";
import SuccessPage from "./components/SuccessPage";
import BasketPage from "./components/BasketPage";

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
      </Routes>
    </>
  );
}

export default App;
