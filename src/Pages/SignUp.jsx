import { Link, useNavigate } from "react-router-dom";
import { IconBrandGoogleFilled, IconArrowLeft } from "@tabler/icons-react";
import { useAppContext } from "../App";
import { useState } from "react";
import ButtonLoading from "../components/ButtonLoading/ButtonLoading";
import { getDocs, query, where } from "firebase/firestore";
import { addOrUpdateUserDetail, usersDetailRef } from "../firebase/firestore";
import { auth, provider } from "../firebase";
import toast from "react-hot-toast";
import { signInWithPopup } from "firebase/auth";

function SignUp() {
  const {
    signUpEmailInput,
    setSignUpEmailInput,
    usernameInput,
    setUsernameInput,
  } = useAppContext();
  const navigate = useNavigate();
  const [usernameError, setUsernameError] = useState(false);
  const [emailInputError, setEmailInputError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleButtonLoading, setIsGoogleButtonLoading] = useState(false);

  const loginWithGoogle = async () => {
    setIsGoogleButtonLoading(true);
    try {
      const u = await signInWithPopup(auth, provider);
      await addOrUpdateUserDetail(u.user.uid, {
        name: u.user.displayName,
        email: u.user.email,
        photo: u.user.photoURL,
        username: usernameInput,
      });
      setIsGoogleButtonLoading(false);
      toast.success("Login Successful");
    } catch (error) {
      setIsGoogleButtonLoading(false);
      toast.error(error.code);
    }
  };

  const emailCheck = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(signUpEmailInput);
  };

  const onClick = () => {
    setIsLoading(true);
    if (!emailCheck()) {
      setEmailInputError(true);
      setIsLoading(false);
      return;
    } else {
      navigate("/createpassword");
    }
  };

  const usernameCheck = async (value) => {
    setUsernameInput(value);

    if (usernameError === "") {
      return;
    }
    if (value.length < 3) {
      setUsernameError(true);
      return;
    }
    setUsernameError(false);
    setIsLoading(true);

    try {
      const data = await getDocs(
        query(usersDetailRef, where("username", "==", value))
      );

      setIsLoading(false);
      if (!data.empty) {
        setUsernameError(true);
        return;
      }
    } catch (error) {}
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
            Join MyLinkSet Now For Free!
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-3 w-full">
          <input
            type="email"
            placeholder="Email"
            value={signUpEmailInput}
            onChange={(e) => {
              setEmailInputError(false);
              setSignUpEmailInput(e.target.value);
            }}
            className={`${
              emailInputError ? "ring-2 ring-red-600 text-red-600" : ""
            } p-3 w-full rounded-lg bg-white outline-none focus-within:ring-2 ring-black`}
          />

          <div
            className={`${
              usernameError ? "ring-2 ring-red-600" : ""
            } flex items-center bg-white rounded-lg p-3 w-full focus-within:ring-2 ring-black`}
          >
            <p className="">mylinkset.vercel.app/</p>
            <input
              type="text"
              placeholder="Username"
              value={usernameInput}
              onChange={(e) => {
                usernameCheck(e.target.value.replace(/[^a-zA-Z0-9_]/g, ""));
              }}
              className="w-full rounded-lg bg-transparent outline-none"
            />
          </div>
          <div className="w-full float-left">
            {usernameInput === "" ? (
              ""
            ) : usernameError ? (
              <p className="text-red-600 font-semibold ps-1">
                Oh No, Username is unavailable or Taken by other User
              </p>
            ) : (
              <p className="text-emerald-900 font-bold ps-1">
                Wow! Username is Available
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-3 w-full">
          <div className="w-full">
            <button
              onClick={onClick}
              className={`${
                usernameInput === "" || usernameError || emailInputError
                  ? "cursor-not-allowed bg-emerald-500 brightness-75"
                  : "cursor-pointer hover:brightness-125 bg-emerald-900"
              } flex justify-center h-12 items-center select-none p-3 rounded-full text-white font-bold w-full z-50 transition-transform active:translate-y-0.5`}
              disabled={
                usernameInput === "" || usernameError || emailInputError
              }
            >
              {isLoading ? <ButtonLoading /> : "Create New Account"}
            </button>
          </div>

          <p className="font-bold">OR</p>
          <button
            onClick={() => loginWithGoogle()}
            className="flex justify-center gap-3 bg-emerald-900 h-12 items-center select-none p-3 rounded-full text-white font-bold w-full hover:brightness-125 z-50 transition-transform active:translate-y-0.5"
          >
            {isGoogleButtonLoading ? (
              <ButtonLoading />
            ) : (
              <>
                <IconBrandGoogleFilled />
                <span>Sign Up With Google</span>
              </>
            )}
          </button>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div>
            Already have an account?{" "}
            <span className="text-blue-900 hover:underline cursor-pointer font-semibold">
              <Link rel="stylesheet" to="/login">
                Log in
              </Link>
            </span>
          </div>
        </div>

        <p className="text-emerald-900">
          By clicking Create account, you agree to MyLinkSet Terms and
          Conditions and confirm <br /> you have read our Privacy Notice. You
          may receive offers, news and updates from us.
        </p>
      </div>
    </div>
  );
}

export default SignUp;