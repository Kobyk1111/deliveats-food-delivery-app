import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import SearchResults from "./pages/SearchResults";
import RestaurantMenu from "./pages/RestaurantMenu";
import { BasketProvider } from "./contexts/BasketContext";

function App() {
  return (
    <>
      <BasketProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/restaurant/:id" element={<RestaurantMenu />} />
        </Routes>
      </BasketProvider>
    </>
  );
}

export default App;