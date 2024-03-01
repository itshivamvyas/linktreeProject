import React from "react";
import Links from "./Pages/Links";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const isAuth = true;

  return (
    <Routes>
      {!isAuth && <Route path="/" element={"Hello Shivam"} />}
      {isAuth && (
        <Route
          path="/*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="home" element={<Links />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="contact-us" element={<ContactUs />} />
                <Route path="*" element={<Navigate to="/home" />} />
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
