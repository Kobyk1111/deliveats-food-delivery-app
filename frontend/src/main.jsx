// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import DataContextProvider from "./contexts/DataContext.jsx";
import BasketProvider from "./contexts/BasketContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <DataContextProvider>
      <BasketProvider>
        <App />
      </BasketProvider>
    </DataContextProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
