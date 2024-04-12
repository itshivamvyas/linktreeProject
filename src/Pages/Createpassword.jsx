import { useState } from "react";
import { Link } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAppContext } from "../App";
import { toast } from "react-hot-toast";
import { auth } from "../firebase";
import { addOrUpdateUserDetail } from "../firebase/firestore";
import ButtonLoading from "../components/ButtonLoading/ButtonLoading";

function Createpassword() {
  const {
    signUpEmailInput,
    usernameInput,
    name,
    setSignUpEmailInput,
    setUsernameInput,
    setName,
  } = useAppContext();
  const [passwordInputError, setPasswordInputError] = useState(false);
  // const [inputRegexError, setInputRegexError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [signUpPasswordInput, setSignUpPasswordInput] = useState("");

  //It Is Used For Password Security
  // const passwordCheck = () => {
  //   const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
  //   return regex.test(signUpPasswordInput);
  // };

  const onSubmit = async (email, password) => {
    if (signUpPasswordInput.length < 6) {
      setPasswordInputError(true);
      return;
    }

    //It Is Used For Password Security
    // if (!passwordCheck()) {
    //   setInputRegexError(true);
    //   setIsLoading(false);
    //   return;
    // }
    setIsLoading(true);
    try {
      const u = await createUserWithEmailAndPassword(auth, email, password);
      await addOrUpdateUserDetail(u.user.uid, {
        email: u.user.email,
        username: usernameInput,
        name: name,
      });
      setIsLoading(false);
      toast.success(`Thanks for Join! ${name}`);
      setSignUpEmailInput("");
      setUsernameInput("");
      setName("");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.code);
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
            Create a strong password with at least 6 characters.
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-3 w-full">
          <div
            className={`${
              passwordInputError ? "ring-2 ring-red-600 text-red-600" : ""
            } flex items-center bg-white rounded-lg w-full focus-within:ring-2 ring-black`}
          >
            <input
              type="password"
              onChange={(e) => {
                // setInputRegexError(false);
                setPasswordInputError(false);
                setSignUpPasswordInput(e.target.value);
              }}
              value={signUpPasswordInput}
              placeholder="Create Password"
              className="p-3 w-full rounded-lg bg-white outline-none"
            />
          </div>

          <div
            className={`${
              passwordInputError ? "ring-2 ring-red-600 text-red-600" : ""
            } flex items-center bg-white rounded-lg w-full focus-within:ring-2 ring-black`}
          >
            <input
              type="text"
              defaultValue={signUpPasswordInput}
              disabled
              placeholder="Confirm Password"
              className="p-3 w-full rounded-lg bg-white outline-none"
            />
          </div>
          {passwordInputError && (
            <p className="text-red-600 float-left w-full font-semibold">
              Password is too Shorter!
            </p>
          )}
          {/* {inputRegexError && (
            <p className="text-red-600 float-left w-full font-semibold">
              Ensures that the password contains at least one numeric digit and
              at least one alphabet character.
            </p>
          )} */}
        </div>

        <div className="flex flex-col justify-center items-center gap-3 w-full">
          <div className="w-full">
            <button
              onClick={() => onSubmit(signUpEmailInput, signUpPasswordInput)}
              className="flex justify-center bg-emerald-900 items-center select-none p-3 rounded-full text-white font-bold w-full hover:brightness-125 z-50 transition-transform active:translate-y-0.5"
            >
              {isLoading ? <ButtonLoading /> : "Create Password"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Createpassword;
