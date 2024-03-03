import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import 'react-toastify/dist/ReactToastify.css'
import "./index.css";
import App from "./components/App";
import { StrictMode } from "react";
import Context from "./testContext/Context/Context";
import { store} from './redux/store'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter basename="react-practice">
      <Context>
        <App />
      </Context>
    </BrowserRouter></Provider>
  </StrictMode>
);
