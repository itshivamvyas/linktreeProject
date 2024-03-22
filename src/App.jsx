import { useEffect, useState, useContext, createContext, useRef } from "react";
import Links from "./Pages/Links";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Home from "./components/Home/Home";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Loginbyphone from "./Pages/Loginbyphone";
import PublicLinks from "./Pages/PublicLinks";
import { auth } from "./firebase";
import Createpassword from "./Pages/Createpassword";
import Userdetails from "./Pages/Userdetails";
import Themes from "./Pages/Themes";
import Yourprofile from "./Pages/Yourprofile";
import OtpVerification from "./Pages/OtpVerification";
import { toast } from "react-hot-toast";
import { addOrUpdateUserDetail } from "./firebase/firestore";

function App() {
  const otpConfirmationResult = useRef(null);

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [verifyOtpLoading, setVerifyOtpLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [signUpEmailInput, setSignUpEmailInput] = useState("");
  const [name, setName] = useState("");
  const [usernameInput, setUsernameInput] = useState("");
  const [linksData, setLinksData] = useState(() => {
    const stored = localStorage.getItem("links");
    return stored ? JSON.parse(stored) : [];
  });

  const isAuth = user !== null;

  const checkForUser = async () => {
    setIsLoading(true);
    await auth.authStateReady();
    setTimeout(() => setIsLoading(false), 500);
  };

  const verifyOtp = async () => {
    setVerifyOtpLoading(true);
    try {
      const u = await otpConfirmationResult.current.confirm(otp);
      await addOrUpdateUserDetail(u.user.uid, {
        phone: u.user.phoneNumber,
      });

      toast.success("Login Successful");
      setVerifyOtpLoading(false);
      setOtp("");
      setPhoneNumber("");
      setName("");
      usernameInput("");
    } catch (error) {
      toast.error("Invalid OTP");
      setVerifyOtpLoading(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(linksData));
  }, [linksData]);

  useEffect(() => {
    checkForUser();
    auth.onAuthStateChanged(async (u) => {
      if (u) {
        // console.log(await getUserDetailData(u.uid))
        setUser({
          name: u.displayName || name,
          picture: u.photoURL,
          email: u.email,
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  useEffect(() => {
    // If user exists, check if name exists or not
    navigate(user ? (user.name ? "/links" : "/userdetails") : "/");
  }, [user]);

  const contextValue = {
    linksData,
    setLinksData,
    user,
    verifyOtp,
    otp,
    setOtp,
    phoneNumber,
    setPhoneNumber,
    otpConfirmationResult: otpConfirmationResult,
    signUpEmailInput,
    setSignUpEmailInput,
    usernameInput,
    setUsernameInput,
    name,
    setName,
    verifyOtpLoading,
  };

  if (isLoading) {
    return (
      <div className="bg-emerald-200 h-screen w-screen flex items-center justify-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="size-10 text-emerald-400 animate-spin fill-emerald-900"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      </div>
    );
  }

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
          path="/otpverification"
          element={isAuth ? <Navigate to="/links" /> : <OtpVerification />}
        />

        <Route
          path="/links"
          element={isAuth ? <Links /> : <Navigate to="/" />}
        />
        <Route path="/userdetails" element={<Userdetails />} />
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
