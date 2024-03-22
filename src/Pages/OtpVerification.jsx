import React from "react";
import { Link } from "react-router-dom";
import { IconArrowLeft, IconShieldLock } from "@tabler/icons-react";
import OtpInput from "react-otp-input";
import { useAppContext } from "../App";
import ButtonLoading from "../components/ButtonLoading/ButtonLoading";

function OtpVerification() {
  const { verifyOtp, otp, setOtp, phoneNumber, verifyOtpLoading } =
    useAppContext();

  return (
    <div className="bg-emerald-200 min-h-screen w-screen flex flex-col items-center justify-normal gap-32">
      <Link rel="stylesheet" to="/loginbyphone">
        <IconArrowLeft className="absolute top-8 left-10 hover:brightness-125 active:translate-y-0.5 cursor-pointer rounded-full size-8 text-emerald-200 bg-emerald-900" />
      </Link>
      <div className="flex flex-col items-center justify-center gap-12">
        <div className="text-5xl font-extrabold text-emerald-900">
          Login To MyLinkSet
        </div>
        <IconShieldLock className="size-16 text-emerald-900" />

        <div className="flex flex-col items-center justify-center w-full gap-6">
          <div className="flex flex-col items-center justify-center w-full gap-1">
            <p className="font-bold text-xl text-emerald-900">Enter Your OTP</p>
            <p className="font-semibold text-emerald-900">
              Send To Your Mobile Number {"+91" + " " + phoneNumber}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full gap-4">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span>&nbsp;&nbsp;</span>}
              inputType="number"
              renderInput={(props) => (
                <input
                  {...props}
                  style={undefined}
                  className="rounded-md h-12 w-10 text-center text-2xl font-semibold outline-none focus-within:ring-2 ring-black"
                />
              )}
            />
            <button className="text-blue-900 hover:underline cursor-pointer font-semibold">
              Resend OTP
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <button
            onClick={verifyOtp}
            className="flex justify-center w-full bg-emerald-900 items-center select-none p-3 rounded-full text-white font-bold hover:brightness-125 z-50 transition-transform active:translate-y-0.5"
          >
            {verifyOtpLoading ? <ButtonLoading /> : "Verify"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default OtpVerification;
