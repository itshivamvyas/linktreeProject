import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";

function Loginbyphone() {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    const newValue = e.target.value.slice(0, 10);
    setInputValue(newValue);
  };

  return (
    <div className="bg-emerald-200 h-screen w-screen flex flex-col items-center justify-normal gap-32">
      <Link rel="stylesheet" to="/">
        <IconArrowLeft className="absolute top-8 left-10 hover:brightness-125 active:translate-y-0.5 cursor-pointer rounded-full size-8 text-emerald-200 bg-emerald-900" />
      </Link>
      <div className="flex flex-col items-center justify-center gap-14">
        <div className="text-5xl font-extrabold text-emerald-900">
          Login To MyLinkSet
        </div>

        <div className="flex flex-col w-full gap-2">
          <div className="flex items-center rounded-lg px-2 border-2 border-emerald-900 bg-white">
            <p className="text-xl">+91</p>
            <input
              type="number"
              placeholder="Enter Your Phone Number"
              value={inputValue}
              onChange={handleInput}
              className="bg-transparent outline-none w-full p-2 text-xl"
            />
          </div>

          <div>
            <span className="text-blue-900 cursor-pointer text-sm underline">
              <Link rel="stylesheet" to="/login">
                Login With Username
              </Link>
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 w-full">
          <button className="flex justify-center w-full bg-emerald-900 items-center select-none p-3 rounded-full text-white font-bold hover:brightness-125 z-50 transition-transform active:translate-y-0.5">
            Log In
          </button>
          <div>
            Don't have an account?{" "}
            <span className="text-blue-900 cursor-pointer underline">
              <Link rel="stylesheet" to="/signup">
                Sign up
              </Link>
            </span>
          </div>
        </div>

        <div className="text-xs">
          <p>
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Loginbyphone;
