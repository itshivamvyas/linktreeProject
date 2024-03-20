import { Link } from "react-router-dom";
import { IconBrandGoogleFilled, IconArrowLeft } from "@tabler/icons-react";
import { loginWithGoogle } from "../firebase/auth";
import { useAppContext } from "../App";

function SignUp() {
  const {
    signUpWithEmailAndPasswordEmailInput,
    setSignUpWithEmailAndPasswordEmailInput,
    usernameInput,
    setUsernameInput,
  } = useAppContext();
  return (
    <div className="bg-emerald-200 min-h-screen w-screen flex flex-col items-center justify-center">
      <Link rel="stylesheet" to="/">
        <IconArrowLeft className="absolute top-8 left-10 hover:brightness-125 active:translate-y-0.5 cursor-pointer rounded-full size-8 text-emerald-200 bg-emerald-900" />
      </Link>
      <div className="flex flex-col justify-center items-center gap-12">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="text-5xl font-extrabold text-emerald-900">
            Welcome To MyLinkSet
          </div>
          <div className="text-xl font-semibold text-emerald-900">
            Join MyLinkSet Now For Free!
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-3 w-full">
          <input
            type="email"
            placeholder="Email"
            value={signUpWithEmailAndPasswordEmailInput}
            onChange={(e) => {
              setSignUpWithEmailAndPasswordEmailInput(e.target.value);
            }}
            className="p-3 w-full rounded-lg bg-white outline-none focus-within:ring-2 ring-black"
          />

          <div className="flex items-center bg-white rounded-lg p-3 w-full focus-within:ring-2 ring-black">
            <p className="">mylinkset.vercel.app/</p>
            <input
              type="text"
              placeholder="Username"
              value={usernameInput}
              onChange={(e) => {
                setUsernameInput(e.target.value);
              }}
              className="w-full rounded-lg bg-transparent outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-3 w-full">
          <div className="w-full">
            <Link to="/createpassword">
              <button className="flex justify-center bg-emerald-900 items-center select-none p-3 rounded-full text-white font-bold w-full hover:brightness-125 z-50 transition-transform active:translate-y-0.5">
                Create Account
              </button>
            </Link>
          </div>

          <p className="font-bold">OR</p>
          <button
            onClick={() => loginWithGoogle(usernameInput)}
            className="flex justify-center gap-3 bg-emerald-900 items-center select-none p-3 rounded-full text-white font-bold w-full hover:brightness-125 z-50 transition-transform active:translate-y-0.5"
          >
            <IconBrandGoogleFilled />
            SignUp With Google
          </button>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div>
            Already have an account?{" "}
            <span className="text-blue-900 hover:underline cursor-pointer font-semibold">
              <Link rel="stylesheet" to="/login">
                Log in
              </Link>
            </span>
          </div>
        </div>

        <p className="text-emerald-900">
          By clicking Create account, you agree to MyLinkSet Terms and
          Conditions and confirm <br /> you have read our Privacy Notice. You
          may receive offers, news and updates from us.
        </p>
      </div>
    </div>
  );
}

export default SignUp;
