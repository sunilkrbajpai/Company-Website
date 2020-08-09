import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
const BrowserRouter = require("react-router-dom").BrowserRouter;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
