import React from "react";
import { Link } from "react-router-dom";
import { IconArrowLeft, IconShieldLock } from "@tabler/icons-react";
import OtpInput from "react-otp-input";
import { useAppContext } from "../App";

function OtpVerification() {
  const { verifyOtp, otp, setOtp } = useAppContext();

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
            renderSeparator={<span>&nbsp;&nbsp;</span>}
            inputType="number"
            renderInput={(props) => (
              <input
                {...props}
                style={undefined}
                className="rounded-md h-12 w-10 text-center text-2xl font-semibold"
              />
            )}
          />
        </div>

        <div>
          <button>Resend Otp</button>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <button
            onClick={verifyOtp}
            className="flex justify-center w-full bg-emerald-900 items-center select-none p-3 rounded-full text-white font-bold hover:brightness-125 z-50 transition-transform active:translate-y-0.5"
          >
            Verify
          </button>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default OtpVerification;
