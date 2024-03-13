import { useEffect, useState, useContext } from "react";
import Links from "./Pages/Links";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Home from "./components/Home/Home";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Loginbyphone from "./Pages/Loginbyphone";
import PublicLinks from "./Pages/PublicLinks";
import { createContext } from "react";

export const Context = createContext();
export const useAppContext = () => useContext(Context);

function App() {
  const navigate = useNavigate();

  const [linksData, setLinksData] = useState(() => {
    const stored = localStorage.getItem("links");
    return stored ? JSON.parse(stored) : [];
  });

  const [isAuth, setIsAuth] = useState(() => {
    const stored = localStorage.getItem("auth");
    return stored ? JSON.parse(stored) : false;
  });

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(isAuth));
  }, [isAuth]);

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(linksData));
  }, [linksData]);

  const logout = () => {
    setIsAuth(false);
    navigate("/");
  };

  const login = () => {
    setIsAuth(true);
  };

  const contextValue = {
    linksData,
    setLinksData,
    logoutUser: logout,
    login,
  };

  return (
    <Context.Provider value={contextValue}>
      <Routes>
        <Route path="/" element={isAuth ? <Navigate to="links" /> : <Home />} />

        <Route
          path="/signup"
          element={isAuth ? <Navigate to="/links" /> : <SignUp />}
        />
        <Route
          path="/login"
          element={isAuth ? <Navigate to="/links" /> : <LogIn />}
        />

        <Route
          path="/loginbyphone"
          element={isAuth ? <Navigate to="/links" /> : <Loginbyphone />}
        />

        <Route
          path="/links"
          element={isAuth ? <Links /> : <Navigate to="/" />}
        />
        <Route
          path="/about-us"
          element={isAuth ? <AboutUs /> : <Navigate to="/" />}
        />
        <Route
          path="/contact-us"
          element={isAuth ? <ContactUs /> : <Navigate to="/" />}
        />

        <Route path=":username" element={<PublicLinks />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
