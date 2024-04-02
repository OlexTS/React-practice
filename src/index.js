import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from "./components/App";
import { StrictMode } from "react";
import Context from "./testContext/Context/Context";
import { persistor, store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="react-practice">
        <Context>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Context>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
