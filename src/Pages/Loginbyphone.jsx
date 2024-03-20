import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IconArrowLeft, IconPhone } from "@tabler/icons-react";
import { useAppContext } from "../App";
import { auth } from "../firebase";
import toast from "react-hot-toast";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

function Loginbyphone() {
const {phoneNumber, setPhoneNumber, otpConfirmationResult, setOtp} = useAppContext()

const navigate = useNavigate()

const sendOtp = async () => {
  try {
    const formattedNumber = "+91" + phoneNumber;
    const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {
      size: "invisible",
    });

    otpConfirmationResult.current = await signInWithPhoneNumber(
      auth,
      formattedNumber,
      recaptcha
    )

    setOtp("")
    
    toast.success("Otp Sent Successfully");

    navigate("/otpverification");
  } catch (error) {
    toast.error("Something Went Wrong");
    console.log(error);
  }
};

  return (
    <div className="bg-emerald-200 min-h-screen w-screen flex flex-col items-center justify-normal gap-32">
      <Link rel="stylesheet" to="/">
        <IconArrowLeft className="absolute top-8 left-10 hover:brightness-125 active:translate-y-0.5 cursor-pointer rounded-full size-8 text-emerald-200 bg-emerald-900" />
      </Link>
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="text-5xl font-extrabold text-emerald-900">
          Login To MyLinkSet
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-6">
          <div className="border-4 p-2 border-emerald-900 rounded-full">
            <IconPhone className="size-12 text-emerald-900" />
          </div>
          <p className="font-bold text-xl text-emerald-900">
            Verify your phone number
          </p>
          <div className="flex items-center rounded-lg px-2 focus-within:ring-2 ring-black bg-white">
            <p className="text-xl">+91</p>

            <input
              type="number"
              placeholder="Enter Your Number"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value.slice(0, 10));
              }}
              className="bg-transparent outline-none p-2 text-xl ps-2"
            />
          </div>

          <p>We will send you an SMS with a verification code.</p>
        </div>

        <div id="recaptcha" />

        <div className="flex flex-col items-center justify-center gap-4 w-full">

          <button
            id="phone-signin-btn"
            onClick={sendOtp}
            className="flex justify-center w-full bg-emerald-900 items-center select-none p-3 rounded-full text-white font-bold hover:brightness-125 z-50 transition-transform active:translate-y-0.5"
          >
            Send Code By SMS
          </button>

          <div>
            Don't have an account?{" "}
            <span className="text-blue-900 cursor-pointer underline">
              <Link rel="stylesheet" to="/signup">
                Sign up
              </Link>
            </span>
          </div>
          <div>
            <span className="text-blue-900 cursor-pointer text-sm underline">
              <Link rel="stylesheet" to="/login">
                Login With Username
              </Link>
            </span>
          </div>
          <div id="recaptcha" />
        </div>
      </div>
    </div>
  );
}

export default Loginbyphone;
