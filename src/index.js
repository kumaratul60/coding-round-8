import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import FilterProvider from "./context/filterContext";

ReactDOM.render(
  <React.StrictMode>
    <FilterProvider>
      <App />
    </FilterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
