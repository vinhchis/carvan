import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    <HashRouter>
      <Header />
      <App />
      <Footer />

    </HashRouter>
  </React.StrictMode>

);
