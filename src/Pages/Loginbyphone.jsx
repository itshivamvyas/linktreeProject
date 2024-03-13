import React from "react";
import { Link } from "react-router-dom";

function Loginbyphone() {
  return (
    <div className="bg-emerald-200 h-screen w-screen flex flex-col items-center justify-center gap-32">
      <div className="flex flex-col items-center justify-center gap-14">
        <div className="text-5xl font-extrabold text-emerald-900">
          Login To MyLinkSet
        </div>

        <div className="flex flex-col w-full gap-2">
          <div className="flex items-center rounded-lg px-2 border-2 border-emerald-900 bg-white p-2">
            <p className="text-xl">+91</p>
            <input
              type="number"
              placeholder="Enter Your Phone Number"
              className="bg-transparent outline-none w-full p-2 text-xl"
            />
          </div>
         
          <div><span className="text-blue-900 cursor-pointer underline"><Link rel="stylesheet" to="/login">Login With Username</Link></span></div>
      
        </div>

        <div className="flex flex-col items-center justify-center gap-6 w-full">
          <button className="flex justify-center w-full bg-emerald-900 items-center select-none p-3 rounded-full text-white font-bold hover:brightness-125 z-50 transition-transform active:translate-y-0.5">
            Log In
          </button>
          <div>Don't have an account? <span className="text-blue-900 cursor-pointer underline"><Link rel="stylesheet" to="/signup">Sign up</Link></span></div>
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
