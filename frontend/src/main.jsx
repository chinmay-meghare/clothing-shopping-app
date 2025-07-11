import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/clothing-shopping-app">
    <ShopContextProvider>
      {/* <StrictMode> */}
      <App />
      {/* </StrictMode> */}
    </ShopContextProvider>
  </BrowserRouter>
);
