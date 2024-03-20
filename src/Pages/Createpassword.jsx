import { useState } from "react";
import { Link } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAppContext } from "../App";
import { toast } from "react-hot-toast";
import { auth } from "../firebase";
import { addOrUpdateUserDetail } from "../firebase/firestore";

function Createpassword() {
  const { signUpWithEmailAndPasswordEmailInput, usernameInput } =
    useAppContext();
  const [
    signUpWithEmailAndPasswordPasswordInput,
    setSignUpWithEmailAndPasswordPasswordInput,
  ] = useState("");

  const onSubmit = async (email, password) => {
    try {
      const u = await createUserWithEmailAndPassword(auth, email, password);
      await addOrUpdateUserDetail(u.user.uid, {
        email: u.user.email,
        username: usernameInput,
      });
    } catch (error) {
      toast.error("Something went wrong try again after sometime");
      console.log(error);
    }
  };

  return (
    <div className="bg-emerald-200 min-h-screen w-screen flex flex-col items-center justify-center">
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
              type="password"
              onChange={(e) => {
                setSignUpWithEmailAndPasswordPasswordInput(e.target.value);
              }}
              value={signUpWithEmailAndPasswordPasswordInput}
              placeholder="Create Password"
              className="p-3 w-full rounded-lg bg-white outline-none"
            />
          </div>

          <div className="flex items-center bg-white rounded-lg w-full focus-within:ring-2 ring-black">
            <input
              type="text"
              defaultValue={signUpWithEmailAndPasswordPasswordInput}
              disabled
              placeholder="Confirm Password"
              className="p-3 w-full rounded-lg bg-white outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-3 w-full">
          <div className="w-full">
            <button
              onClick={() =>
                onSubmit(
                  signUpWithEmailAndPasswordEmailInput,
                  signUpWithEmailAndPasswordPasswordInput
                )
              }
              className="flex justify-center bg-emerald-900 items-center select-none p-3 rounded-full text-white font-bold w-full hover:brightness-125 z-50 transition-transform active:translate-y-0.5"
            >
              Create Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Createpassword;
