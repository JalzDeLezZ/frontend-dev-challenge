import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/Root.scss";
import "./styles/Components.scss";
import { AllProvider } from "./context/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AllProvider>
    <App />
  </AllProvider>
);
