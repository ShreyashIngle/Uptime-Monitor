import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.scss";
import "./assets/sass/utils/global.module.scss";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
);
