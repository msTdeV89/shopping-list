import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ShoppingListProvider from "./context/context";

ReactDOM.render(
  <>
    <ShoppingListProvider>
      <App />
    </ShoppingListProvider>
  </>,
  document.getElementById("root")
);
