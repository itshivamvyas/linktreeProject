import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../App";
import { useState } from "react";
import { getDocs, query, where } from "firebase/firestore";
import { usersDetailRef } from "../../firebase/firestore";
import ButtonLoading from "../ButtonLoading/ButtonLoading";

function Home() {
  const { usernameInput, setUsernameInput } = useAppContext();
  const [usernameError, setUsernameError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
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
    setIsLoading(true);

    try {
      const data = await getDocs(
        query(usersDetailRef, where("username", "==", value))
      );

      setIsLoading(false);

      if (!data.empty) {
        setUsernameError(true);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onClaim = () => {
    navigate("/signup");
  };

  return (
    <div>
      <div>
        <div className="fixed top-0 w-full z-50 p-10">
          <div className="bg-white rounded-full flex p-1 flex-row justify-between">
            <ul className="flex flex-row p-1 gap-1 text-xl text-center items-center ps-8">
              <li className="text-center font-bold cursor-pointer text-xl text-emerald-900">
                MyLinkSet
              </li>
            </ul>
            <ul className="flex flex-row p-2 gap-5 pe-5 items-center">
              <Link rel="stylesheet" to="/signup">
                <li className="hover:brightness-125 text-white transition-colors bg-emerald-500 rounded-xl px-6 py-2 font-bold active:translate-y-0.5 cursor-pointer flex flex-row gap-1 justify-center items-center">
                  SignUp
                </li>
              </Link>

              <Link rel="stylesheet" to="/login">
                <li className="hover:brightness-125 text-white transition-colors bg-emerald-900 rounded-xl px-6 py-2 font-bold active:translate-y-0.5 cursor-pointer flex flex-row gap-1 justify-center items-center">
                  Login
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="bg-emerald-200 text-emerald-900 min-h-screen w-screen flex flex-row items-center">
          <div className="p-16 w-2/3 flex flex-col gap-12 mt-9">
            <h1 className="text-6xl font-extrabold">
              MyLinkSet: Your All-in-One Bio Link
            </h1>
            <p className="text-emerald-950/70 font-semibold">
              MyLinkSet is a link-in-bio tool for social media. It creates a
              landing page with all your important links, accessible from one
              central URL in your bio.
            </p>
            <div className="flex flex-col gap-3">
              <div>
                <div className="flex gap-4 h-12">
                  <div
                    className={`flex items-center rounded-xl px-6 bg-white/80 border-2 ${
                      usernameError ? "border-red-600" : "border-emerald-900"
                    }`}
                  >
                    <p className="">mylinkset.vercel.app/</p>
                    <input
                      type="text"
                      value={usernameInput}
                      onChange={(e) => {
                        usernameCheck(e.target.value.replace(/[^a-zA-Z0-9_]/g, ''));
                      }}
                      placeholder="Claim Your Username"
                      className="bg-transparent outline-none"
                    />
                  </div>
                  <button
                    className={`${usernameInput === "" || usernameError ? "cursor-not-allowed bg-emerald-500 brightness-75": "cursor-pointer hover:brightness-125 bg-emerald-900"} w-24  text-white transition-colors rounded-xl px-6 font-bold active:translate-y-0.5 flex items-center justify-center`}
                    onClick={onClaim}
                    disabled={usernameInput === "" || usernameError}
                  >
                    {isLoading ? <ButtonLoading /> : "Claim"}
                  </button>
                </div>
              </div>
              <div>
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
          </div>

          <div>
            <img
              src="./mylinkset.png"
              alt="mylinkset"
              className="w-auto h-96 pt-14"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
