import React from 'react'
import {IconGrowth} from "@tabler/icons-react";

function Loginbyphone() {
  return (
    <div className="bg-white h-screen w-screen flex items-center justify-center">
      <div>
        <div className="text-3xl">Login To Your LinkTree <IconGrowth className="text-black" /></div>
        <div>+91<input type="number" placeholder='Enter Your Number'/></div>
        <div><p>Login With Username</p></div>
        <button className="flex justify-center items-center select-none gap-2 p-5 bg-black rounded-full text-white font-bold w-full hover:bg-opacity-85 shadow-lg shadow-black/40 z-50 transition-transform active:translate-y-0.5"> Log In </button>
        <div>Don't have an account? Sign up</div>
        <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
      </div>
    </div>
  )
}

export default Loginbyphone
