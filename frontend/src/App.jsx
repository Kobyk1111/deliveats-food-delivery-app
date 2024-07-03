import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-results" element={<SearchResults />} />
      </Routes>
    </>
  );
}

export default App;
