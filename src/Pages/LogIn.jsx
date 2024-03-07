import React from 'react'
import {IconGrowth} from "@tabler/icons-react";

function LogIn() {
  return (
    <div className="bg-white h-screen w-screen flex items-center justify-center">
      <div>
        <div className="text-3xl">Welcome To Your LinkTree <IconGrowth className="text-black" /></div>
        <div>Log in To Your LinkTree</div>
        <input type="email" placeholder='Email Or Username'/>
        <input type="text" placeholder='Password'/>
        <div><p>Forgot Username?</p><p>Forgot Password?</p></div>
        <button className="flex justify-center items-center select-none gap-2 p-5 bg-black rounded-full text-white font-bold w-full hover:bg-opacity-85 shadow-lg shadow-black/40 z-50 transition-transform active:translate-y-0.5"> Log In </button>
        <p>OR</p>
        <button className="flex justify-center items-center select-none gap-2 p-5 bg-white rounded-full font-bold w-full hover:bg-opacity-85 shadow-lg shadow-black/40 z-50 transition-transform active:translate-y-0.5"> Login With Google </button>
        <div>Don't have an account? Sign up</div>
        <div>You can also log in with a Phone number</div>
        <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
      </div>
    </div>
  )
}

export default LogIn
