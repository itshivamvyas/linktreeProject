import React from "react";
import {IconGrowth} from "@tabler/icons-react";

function SignUp() {
  return (
    <div className="bg-white h-screen w-screen flex items-center justify-center">
      <div>
        <div className="text-3xl">Welcome To Your LinkTree <IconGrowth className="text-black" /></div>
        <div>Join LinkTree Now For Free!</div>
        <input type="email" />
        <input type="text" />
        <button className="flex justify-center items-center select-none gap-2 p-5 bg-black rounded-full text-white font-bold w-full hover:bg-opacity-85 shadow-lg shadow-black/40 z-50 transition-transform active:translate-y-0.5"> Create Account </button>
        <span>By clicking Create account, you agree to Linktree's Terms and Conditions and confirm you have read our Privacy Notice. You may receive offers, news and updates from us.</span>
        <p>OR</p>
        <button className="flex justify-center items-center select-none gap-2 p-5 bg-white rounded-full font-bold w-full hover:bg-opacity-85 shadow-lg shadow-black/40 z-50 transition-transform active:translate-y-0.5"> SignUp With Google </button>
        <div>Already have an account? Log in</div>
        <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
      </div>
    </div>
  );
}

export default SignUp;
