import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Links from "./Pages/Links.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs.jsx";
import ContactUs from "./Pages/ContactUs.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Links/>}/>
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/about-us" element={<ContactUs/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
