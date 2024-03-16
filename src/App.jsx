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
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "./firebase";
import Createpassword from "./Pages/Createpassword";
import Userdetails from "./Pages/Userdetails";
import Themes from "./Pages/Themes";
import Yourprofile from "./Pages/Yourprofile";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const [linksData, setLinksData] = useState(() => {
    const stored = localStorage.getItem("links");
    return stored ? JSON.parse(stored) : [];
  });

  const isAuth = user !== null;

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(linksData));
  }, [linksData]);

  const logout = async () => {
    await auth.signOut();
  };

  const login = () => {
    setIsAuth(true);
  };

  const loginGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  const signupEmailPassword = () => {
    createUserWithEmailAndPassword(auth);
  };

  const contextValue = {
    linksData,
    setLinksData,
    logoutUser: logout,
    login,
    user,
    loginGoogle,
  };

  useEffect(() => {
    auth.onAuthStateChanged((u) => {
      if (u) {
        setUser({ name: u.displayName, picture: u.photoURL, email: u.email });
      } else {
        setUser(null);
      }
    });
  }, []);

  useEffect(() => {
    navigate(user ? "/links" : "/");
  }, [user]);

  return (
    <Context.Provider value={contextValue}>
      <Routes>
        <Route path="/" element={isAuth ? <Navigate to="links" /> : <Home />} />

        <Route
          path="/signup"
          element={isAuth ? <Navigate to="/links" /> : <SignUp />}
        />
        <Route
          path="/createpassword"
          element={isAuth ? <Navigate to="/links" /> : <Createpassword />}
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
          path="/userdetails"
          element={isAuth ? <Userdetails /> : <Navigate to="/" />}
        />
        <Route
          path="/aboutus"
          element={isAuth ? <AboutUs /> : <Navigate to="/" />}
        />
        <Route
          path="/yourprofile"
          element={isAuth ? <Yourprofile /> : <Navigate to="/" />}
        />
        <Route
          path="/themes"
          element={isAuth ? <Themes /> : <Navigate to="/" />}
        />
        <Route
          path="/contactus"
          element={isAuth ? <ContactUs /> : <Navigate to="/" />}
        />

        <Route path=":username" element={<PublicLinks />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
export const Context = createContext();
export const useAppContext = () => useContext(Context);
