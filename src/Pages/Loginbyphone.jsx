import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IconArrowLeft, IconPhone } from "@tabler/icons-react";
import { useAppContext } from "../App";
import toast from "react-hot-toast";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import ButtonLoading from "../components/ButtonLoading/ButtonLoading";
import { useState } from "react";
import { auth } from "../firebase";

function Loginbyphone() {
  const {
    phoneNumber,
    setPhoneNumber,
    otpConfirmationResult,
    setOtp,
    usernameInput,
    setUsernameInput,
    name,
    setName,
  } = useAppContext();

  const navigate = useNavigate();
  const [buttonLoading, setButtonLoading] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [nameError, setNameError] = useState(false);

  const sendOtp = async () => {
    if (name === "") {
      setNameError(true);
      return;
    }
    try {
      setButtonLoading(true);
      const formattedNumber = "+91" + phoneNumber;
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {
        size: "invisible",
      });

      otpConfirmationResult.current = await signInWithPhoneNumber(
        auth,
        formattedNumber,
        recaptcha
      );
      setOtp("");
      toast.success("Otp Sent Successfully");
      setButtonLoading(false);
      navigate("/otpverification");
    } catch (error) {
      toast.error(error.code);
    }
  };

  const usernameCheck = async (value) => {
    setUsernameInput(value);

    if (usernameError === "") {
      return;
    }
    if (value.length < 3) {
      setUsernameError(true);
      return;
    }
    setUsernameError(false);

    try {
      const data = await getDocs(
        query(usersDetailRef, where("username", "==", value))
      );

      if (!data.empty) {
        setUsernameError(true);
        return;
      }
    } catch (error) {}
  };

  return (
    <div className="bg-emerald-200 min-h-screen w-screen flex flex-col items-center justify-center">
      <Link rel="stylesheet" to="/">
        <IconArrowLeft className="absolute top-8 left-10 hover:brightness-125 active:translate-y-0.5 cursor-pointer rounded-full size-8 text-emerald-200 bg-emerald-900" />
      </Link>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="text-5xl font-extrabold text-emerald-900">
          Login To MyLinkSet
        </div>

        <div className="border-4 p-2 border-emerald-900 rounded-full">
          <IconPhone className="size-12 text-emerald-900" />
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-2">
          <p className="font-bold text-xl text-emerald-900">
            Verify your phone number
          </p>
          <p className="text-emerald-900">
            We will send you an SMS with a verification code.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-2">
          <div className="flex items-center bg-white rounded-lg p-3 w-full focus-within:ring-2 ring-black">
            <p>+91</p>
            <input
              type="number"
              placeholder="Enter Your Phone Number"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value.slice(0, 10));
              }}
              className="w-full rounded-lg bg-transparent outline-none ps-1"
            />
          </div>

          <input
            type="text"
            placeholder="Enter Your Full Name"
            value={name}
            onChange={(e) => {
              setNameError(false);
              setName(e.target.value);
            }}
            className={`${
              nameError ? "ring-2 ring-red-600 text-red-600" : ""
            } p-3 w-full rounded-lg bg-white outline-none focus-within:ring-2 ring-black`}
          />

          <div
            className={`${
              usernameError ? "ring-2 ring-red-600" : ""
            } flex items-center bg-white rounded-lg p-3 w-full focus-within:ring-2 ring-black`}
          >
            <p className="">mylinkset.vercel.app/</p>
            <input
              type="text"
              placeholder="Username"
              value={usernameInput}
              onChange={(e) => {
                usernameCheck(e.target.value.replace(/[^a-zA-Z0-9_]/g, ""));
              }}
              className="w-full rounded-lg bg-transparent outline-none"
            />
          </div>
          <div className="w-full float-left">
            {usernameInput === "" ? (
              ""
            ) : usernameError ? (
              <p className="text-red-600 font-semibold ps-1">
                Oh No, Username is unavailable or Taken by other User
              </p>
            ) : (
              <p className="text-emerald-900 font-bold ps-1">
                Wow! Username is Available
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <button
            id="phone-signin-btn"
            disabled={
              buttonLoading ||
              phoneNumber.length < 10 ||
              usernameInput.length < 3
            }
            onClick={sendOtp}
            className={`${
              phoneNumber.length < 10 || usernameInput.length < 3
                ? "opacity-50 cursor-not-allowed"
                : "hover:brightness-125 transition-transform active:translate-y-0.5"
            } bg-emerald-900 flex justify-center w-full items-center select-none p-3 rounded-full text-white font-bold z-50`}
          >
            {buttonLoading ? <ButtonLoading /> : "Send Code By SMS"}
          </button>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-2">
          <div>
            Don't have an account?{" "}
            <span className="text-blue-900 hover:underline cursor-pointer font-semibold">
              <Link rel="stylesheet" to="/signup">
                Sign up
              </Link>
            </span>
          </div>

          <div className="flex items-center justify-center w-full">
            <div>
              Login With{" "}
              <span className="text-blue-900 hover:underline cursor-pointer font-semibold">
                <Link rel="stylesheet" to="/login">
                  Email And Password
                </Link>
              </span>
            </div>
          </div>
        </div>

        <div id="recaptcha" />
      </div>
    </div>
  );
}

export default Loginbyphone;
