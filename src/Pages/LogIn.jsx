import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  IconBrandGoogleFilled,
  IconEye,
  IconEyeOff,
  IconArrowLeft,
} from "@tabler/icons-react";
import { useAppContext } from "../App";
import { toast } from "react-hot-toast";
import ButtonLoading from "../components/ButtonLoading/ButtonLoading";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { addOrUpdateUserDetail } from "../firebase/firestore";
import { auth, provider } from "../firebase";

function LogIn() {
  const [logInEmailInput, setLogInEmailInput] = useState("");
  const [logInPasswordInput, setLogInPasswordInput] = useState("");
  const { usernameInput } = useAppContext();
  const [maskPassword, setMaskPassword] = useState("password");
  const [isLoading, setIsLoading] = useState(false);
  const [emailInputError, setEmailInputError] = useState(false);
  const [passwordInputError, setPasswordInputError] = useState(false);
  const [isGoogleButtonLoading, setIsGoogleButtonLoading] = useState(false);
  const [passwordShowIcon, setPasswordShowIcon] = useState(false);
  const [resetPasswordLoading, setResetPasswordLoading] = useState(false);
  const [information, setInformation] = useState(false);

  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setMaskPassword(maskPassword === "password" ? "text" : "password");
  };

  const IconReplace = passwordShowIcon ? IconEye : IconEyeOff;

  const OnclickPasswordButton = () => {
    setPasswordShowIcon(!passwordShowIcon);
    togglePasswordVisibility();
  };

  const emailCheck = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(logInEmailInput);
  };

  const loginWithGoogle = async (usernameInput) => {
    setIsGoogleButtonLoading(true);
    try {
      const u = await signInWithPopup(auth, provider);
      await addOrUpdateUserDetail(u.user.uid, {
        name: u.user.displayName,
        email: u.user.email,
        photo: u.user.photoURL,
      });
      setIsGoogleButtonLoading(false);
      toast.success("Login Successful");
      (u.user.username ? navigate("/") : navigate("/userdetails"))
    } catch (error) {
      setIsGoogleButtonLoading(false);
      toast.error(error.code);
    }
  };

  async function logInWithEmailPassword(email, password) {
    if (!emailCheck()) {
      setEmailInputError(true);
      return;
    }

    if (logInPasswordInput.length < 6) {
      setPasswordInputError(true);
      return;
    }
    try {
      setIsLoading(true);
      const u = await signInWithEmailAndPassword(auth, email, password);
      await addOrUpdateUserDetail(u.user.uid, {
        email: u.user.email,
      });
      toast.success("Login Successful");
      setLogInEmailInput("");
      setLogInPasswordInput("");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.code);
    }
  }

  const resetPassword = () => {
    if (!emailCheck()) {
      setEmailInputError(true);
      return;
    }
    setResetPasswordLoading(true);
    sendPasswordResetEmail(auth, logInEmailInput)
      .then(() => {
        setInformation(true);
        toast.success("Password reset email sent!");
        setResetPasswordLoading(false);
        setEmailInputError(false);
        setTimeout(() => {
          setInformation(false);
        }, 4000);
      })
      .catch((error) => {
        setResetPasswordLoading(false);
        toast.error(error.code);
      });
  };

  return (
    <div className="bg-emerald-200 min-h-screen w-screen flex flex-col items-center justify-center">
      <Link rel="stylesheet" to="/">
        <IconArrowLeft className="absolute top-8 left-10 hover:brightness-125 active:translate-y-0.5 cursor-pointer rounded-full size-8 text-emerald-200 bg-emerald-900" />
      </Link>
      <div className="flex flex-col justify-center items-center gap-12">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="text-5xl font-extrabold text-emerald-900">
            Welcome To MyLinkSet
          </div>
          <div className="text-xl font-semibold text-emerald-900">
            Log in To MyLinkSet
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-3 w-full">
          <input
            type="email"
            value={logInEmailInput}
            onChange={(e) => {
              setEmailInputError(false);
              setLogInEmailInput(e.target.value);
            }}
            placeholder="Email"
            className={`${
              emailInputError ? "text-red-600 ring-2 ring-red-600" : ""
            } p-3 w-full rounded-lg bg-white outline-none focus-within:ring-2 ring-black`}
          />
          <div
            className={`${
              passwordInputError ? "ring-2 ring-red-600 text-red-600" : ""
            } flex items-center bg-white rounded-lg w-full focus-within:ring-2 ring-black`}
          >
            <input
              type={maskPassword}
              value={logInPasswordInput}
              onChange={(e) => {
                setPasswordInputError(false);
                setLogInPasswordInput(e.target.value);
              }}
              placeholder="Password"
              className="p-3 w-full rounded-lg bg-white outline-none"
            />
            <IconReplace
              onClick={OnclickPasswordButton}
              className="cursor-pointer mr-3"
            />
          </div>

          {information ? (
            <p className="max-w-xl text-red-500">
              <span className="font-bold flex">Information</span>
              If your account exists, a password reset link was sent to your
              registered email address. Please check your spam mails also.
            </p>
          ) : (
            <button
              onClick={resetPassword}
              className="text-blue-900 font-semibold float-left ps-1 cursor-pointer outline-none hover:text-blue-600 hover:underline transition-transform active:translate-y-0.5"
            >
              {resetPasswordLoading ? <ButtonLoading /> : "Forgot Password?"}
            </button>
          )}

          <div className="w-full float-left">
            {passwordInputError && (
              <p className="font-semibold text-red-600">
                Password must be at least 6 characters long
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-3 w-full">
          <button
            onClick={() =>
              logInWithEmailPassword(logInEmailInput, logInPasswordInput)
            }
            className="flex justify-center bg-emerald-900 items-center select-none p-3 rounded-full text-white font-bold w-full hover:brightness-125 z-50 transition-transform active:translate-y-0.5"
          >
            {isLoading ? <ButtonLoading /> : "Log In"}
          </button>
          <p className="font-bold">OR</p>
          <button
            onClick={() => loginWithGoogle(usernameInput)}
            className="flex justify-center gap-3 bg-emerald-900 items-center select-none p-3 rounded-full text-white font-bold w-full hover:brightness-125 z-50 transition-transform active:translate-y-0.5"
          >
            {isGoogleButtonLoading ? (
              <ButtonLoading />
            ) : (
              <>
                <IconBrandGoogleFilled />
                <span>Log In With Google</span>
              </>
            )}
          </button>
        </div>

        <div className="flex flex-col justify-center items-center gap-3">
          <div>
            <div>
              Don't have an account?{" "}
              <span className="text-blue-900 hover:underline cursor-pointer font-semibold">
                <Link rel="stylesheet" to="/signup">
                  Sign Up
                </Link>
              </span>
            </div>
          </div>

          <div>
            <div>
              You can also Log In with a{" "}
              <span className="text-blue-900 hover:underline cursor-pointer font-semibold">
                <Link rel="stylesheet" to="/loginbyphone">
                  Phone number
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;