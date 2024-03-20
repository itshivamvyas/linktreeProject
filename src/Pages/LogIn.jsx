import { useState } from "react";
import { Link } from "react-router-dom";
import {
  IconBrandGoogleFilled,
  IconEye,
  IconEyeOff,
  IconArrowLeft,
} from "@tabler/icons-react";
import { useAppContext } from "../App";
import { loginWithGoogle, logInWithEmailPassword } from "../firebase/auth";

function LogIn() {
  const [signInEmailInput, setSignInEmailInput] = useState("");
  const { signInPasswordInput, setSignInPasswordInput, usernameInput } =
    useAppContext();
  const [maskPassword, setMaskPassword] = useState("password");
  const togglePasswordVisibility = () => {
    setMaskPassword(maskPassword === "password" ? "text" : "password");
  };
  const [passwordShowIcon, setPasswordShowIcon] = useState(false);
  const IconReplace = passwordShowIcon ? IconEye : IconEyeOff;
  const OnclickPasswordButton = () => {
    setPasswordShowIcon(!passwordShowIcon);
    togglePasswordVisibility();
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
            value={signInEmailInput}
            onChange={(e) => setSignInEmailInput(e.target.value)}
            placeholder="Email"
            className="p-3 w-full rounded-lg bg-white outline-none focus-within:ring-2 ring-black"
          />
          <div className="flex items-center bg-white rounded-lg w-full focus-within:ring-2 ring-black">
            <input
              type={maskPassword}
              value={signInPasswordInput}
              onChange={(e) => setSignInPasswordInput(e.target.value)}
              placeholder="Password"
              className="p-3 w-full rounded-lg bg-white outline-none"
            />
            <IconReplace
              onClick={OnclickPasswordButton}
              className="cursor-pointer mr-3"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-3 w-full">
          <button
            onClick={() =>
              logInWithEmailPassword(signInEmailInput, signInPasswordInput)
            }
            className="flex justify-center bg-emerald-900 items-center select-none p-3 rounded-full text-white font-bold w-full hover:brightness-125 z-50 transition-transform active:translate-y-0.5"
          >
            Log In
          </button>
          <p className="font-bold">OR</p>
          <button
            onClick={() => loginWithGoogle(usernameInput)}
            className="flex justify-center gap-3 bg-emerald-900 items-center select-none p-3 rounded-full text-white font-bold w-full hover:brightness-125 z-50 transition-transform active:translate-y-0.5"
          >
            <IconBrandGoogleFilled />
            Login With Google
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
              You can also log in with a{" "}
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
