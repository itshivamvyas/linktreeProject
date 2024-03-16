import { useState } from "react";
import { Link } from "react-router-dom";
import { IconEye, IconEyeOff, IconArrowLeft } from "@tabler/icons-react";

function Createpassword() {
  const [maskPassword, setMaskPassword] = useState("password");
  const togglePasswordVisibility = () => {
    setMaskPassword(maskPassword === "password" ? "text" : "password");
  };
  const [passwordShowIcon, setPasswordShowIcon] = useState(false);
  const IconReplace = passwordShowIcon ? IconEye : IconEyeOff;
  const OnclickPasswordButton = () => {
    setPasswordShowIcon(!passwordShowIcon);
    togglePasswordVisibility();
  };
  return (
    <div className="bg-emerald-200 h-screen w-screen flex flex-col items-center justify-center">
    <Link rel="stylesheet" to="/signup">
      <IconArrowLeft className="absolute top-8 left-10 hover:brightness-125 active:translate-y-0.5 cursor-pointer rounded-full size-8 text-emerald-200 bg-emerald-900" />
    </Link>
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="text-5xl font-extrabold text-emerald-900">
          Create a Strong Password
        </div>
        <div className="text-xl text-emerald-900">
        Create a strong password with at least 8 characters.
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-3 w-full">
      <div className="flex items-center bg-white rounded-lg w-full focus-within:ring-2 ring-black">
        <input
          type={maskPassword}
          placeholder="Create Password"
          className="p-3 w-full rounded-lg bg-white outline-none"
        />
        <IconReplace
          onClick={OnclickPasswordButton}
          className="cursor-pointer mr-3"
        />
      </div>

      <div className="flex items-center bg-white rounded-lg w-full focus-within:ring-2 ring-black">
        <input
          type={maskPassword}
          placeholder="Confirm Password"
          className="p-3 w-full rounded-lg bg-white outline-none"
        />
        <IconReplace
          onClick={OnclickPasswordButton}
          className="cursor-pointer mr-3"
        />
      </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-3 w-full">
        <div className="w-full">
        <Link to="/userdetails">
          <button className="flex justify-center bg-emerald-900 items-center select-none p-3 rounded-full text-white font-bold w-full hover:brightness-125 z-50 transition-transform active:translate-y-0.5">
            Create Password
          </button>
        </Link>
        </div>
      </div>
    </div>
      <div className="pt-12">
        <p className="text-xs">
          This site is protected by reCAPTCHA and the Google Privacy Policy
          and Terms of Service apply.
        </p>
      </div>
    </div>
  );
}

export default Createpassword;
