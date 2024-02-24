import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'
import "./index.css";
import App from "./components/App";
import { StrictMode } from "react";
import Context from "./testContext/Context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter basename="react-practice">
      <Context>
        <App />
      </Context>
    </BrowserRouter>
  </StrictMode>
);
