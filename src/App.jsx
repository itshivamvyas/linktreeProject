import React from "react";
import Links from "./Pages/Links";
import { Routes, Route, Navigate } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import SignUp from "./Pages/SignUp";

function App() {
  const isAuth = false;

  return (
    <Routes>
      {!isAuth && <Route path="/" element={<Home/>} />}
      {!isAuth && <Route path="/signup" element={<SignUp/>} />}
      {isAuth && (
        <Route
          path="/*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="links" element={<Links />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="contact-us" element={<ContactUs />} />
                <Route path="*" element={<Navigate to="/links" />} />
              </Routes>
              <Footer />
            </>
          }
        />
      )}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
