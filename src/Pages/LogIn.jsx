import { useState } from "react";
import { Link } from "react-router-dom";
import {
  IconBrandGoogleFilled,
  IconEye,
  IconEyeOff,
  IconArrowLeft,
} from "@tabler/icons-react";
import { useAppContext } from "../App";


function LogIn() {
  const {loginGoogle} = useAppContext()
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
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="text-5xl font-extrabold text-emerald-900">
            Welcome To MyLinkSet
          </div>
          <div className="text-xl text-emerald-900">Log in To MyLinkSet</div>
        </div>


        <div className="flex flex-col justify-center items-center gap-3 w-full">
          <input
            type="email"
            placeholder="Email Or Username"
            className="p-3 w-full rounded-lg bg-white outline-none focus-within:ring-2 ring-black"
          />
          <div className="flex items-center bg-white rounded-lg w-full focus-within:ring-2 ring-black">
            <input
              type={maskPassword}
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
          <button className="flex justify-center bg-emerald-900 items-center select-none p-3 rounded-full text-white font-bold w-full hover:brightness-125 z-50 transition-transform active:translate-y-0.5">
            Log In
          </button>
          <p className="font-bold">OR</p>
          <button onClick={loginGoogle} className="flex justify-center gap-3 bg-emerald-900 items-center select-none p-3 rounded-full text-white font-bold w-full hover:brightness-125 z-50 transition-transform active:translate-y-0.5">
            <IconBrandGoogleFilled />
            Login With Google
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-3 pt-12">
        <div>
          <div>
            Don't have an account?
            <span className="text-blue-900 cursor-pointer underline">
              <Link rel="stylesheet" to="/signup">
                Sign up
              </Link>
            </span>
          </div>
        </div>

        <div>
          <div>
            You can also log in with a&nbsp;
            <span className="text-blue-900 cursor-pointer underline">
              <Link rel="stylesheet" to="/loginbyphone">
                Phone number
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
