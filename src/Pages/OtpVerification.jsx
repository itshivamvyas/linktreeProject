import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconArrowLeft, IconShieldLock } from "@tabler/icons-react";
import { useAppContext } from "../App";
import OtpInput from 'react-otp-input';

function OtpVerification() {
const {otp, setOtp, verifyOtp} = useAppContext()

  return (
    <div className="bg-emerald-200 min-h-screen w-screen flex flex-col items-center justify-normal gap-32">
      <Link rel="stylesheet" to="/loginbyphone">
        <IconArrowLeft className="absolute top-8 left-10 hover:brightness-125 active:translate-y-0.5 cursor-pointer rounded-full size-8 text-emerald-200 bg-emerald-900" />
      </Link>
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="text-5xl font-extrabold text-emerald-900">
          Login To MyLinkSet
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-6">
          <IconShieldLock className="size-16 text-emerald-900" />
          <p className="font-bold text-xl text-emerald-900">Enter Your OTP</p>


          <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />



          {/* <div className="flex items-center justify-center rounded-lg gap-4">
            <input
              type="number"
              className="bg-transparent outline-none p-2 text-2xl max-h-10 max-w-7 focus-within:ring-2 ring-black rounded-md flex justify-center items-center bg-white"
              maxLength="1"
              max="1"
              size="1"
              ref={num1}
              onChange={(e) => handleOtp1Change(e.target.value)}
            />
            <input
              type="number"
              className="bg-transparent outline-none p-2 text-2xl max-h-10 max-w-7 focus-within:ring-2 ring-black rounded-md flex justify-center items-center bg-white"
              maxLength="1"
              max="1"
              size="1"
              ref={num2}
              onChange={(e) => handleOtp2Change(e.target.value)}
            />
            <input
              type="number"
              className="bg-transparent outline-none p-2 text-2xl max-h-10 max-w-7 focus-within:ring-2 ring-black rounded-md flex justify-center items-center bg-white"
              maxLength="1"
              max="1"
              size="1"
              ref={num3}
              onChange={(e) => handleOtp3Change(e.target.value)}
            />
            <input
              type="number"
              className="bg-transparent outline-none p-2 text-2xl max-h-10 max-w-7 focus-within:ring-2 ring-black rounded-md flex justify-center items-center bg-white"
              maxLength="1"
              max="1"
              size="1"
              ref={num4}
              onChange={(e) => handleOtp4Change(e.target.value)}
            />
            <input
              type="number"
              className="bg-transparent outline-none p-2 text-2xl max-h-10 max-w-7 focus-within:ring-2 ring-black rounded-md flex justify-center items-center bg-white"
              maxLength="1"
              max="1"
              size="1"
              ref={num5}
              onChange={(e) => handleOtp5Change(e.target.value)}
            />
            <input
              type="number"
              className="bg-transparent outline-none p-2 text-2xl max-h-10 max-w-7 focus-within:ring-2 ring-black rounded-md flex justify-center items-center bg-white"
              maxLength="1"
              max="1"
              size="1"
              ref={num6}
              onChange={(e) => handleOtp6Change(e.target.value)}
            />
          </div> */}
        </div>

        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <button onClick={verifyOtp} className="flex justify-center w-full bg-emerald-900 items-center select-none p-3 rounded-full text-white font-bold hover:brightness-125 z-50 transition-transform active:translate-y-0.5">
            Verify
          </button>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default OtpVerification;
