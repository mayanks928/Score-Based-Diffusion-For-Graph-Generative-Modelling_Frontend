import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const rootelement = createRoot(document.getElementById("root"));
rootelement.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
