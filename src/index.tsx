import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import { App } from "./app";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Header } from "./componets/header";

const container = document.getElementById("root")!;

ReactDOM.createRoot(container).render(
  <BrowserRouter>
    <Provider store={store}>
      <Header />
      <App />
    </Provider>
  </BrowserRouter>
);
