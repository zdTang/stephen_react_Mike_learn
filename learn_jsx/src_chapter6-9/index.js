import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "./context/books";
import { NavigationProvider } from "./context/NavigationContext";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <NavigationProvider>
    <Provider>
      <App />
    </Provider>
  </NavigationProvider>
);
