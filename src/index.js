import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import { Provider } from "react-redux";
import store from "./components/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
