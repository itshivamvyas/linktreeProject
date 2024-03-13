import { IconLogin2, IconUserPlus, IconGrowth } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../App";

function Home() {
  const { login } = useAppContext();
  return (
    <div>
      <div>
        <div className="fixed top-0 w-full z-50 p-10">
          <div className="bg-white rounded-full flex p-3 flex-row justify-between">
            <ul className="flex flex-row p-2 gap-1 text-xl text-center items-center ps-8">
              <li className="text-center font-bold cursor-pointer text-xl text-emerald-900">
              MyLinkSet
              </li>
              <li className="text-center items-center justify-center font-bold cursor-pointer text-indigo-700">
                <IconGrowth className="text-emerald-900" />
              </li>
            </ul>
            <ul className="flex flex-row p-2 gap-5 pe-5 items-center">
              <Link rel="stylesheet" to="/login">
                <li
                  className="hover:brightness-125 text-white transition-colors bg-emerald-900 rounded-xl px-6 py-2 font-bold active:translate-y-0.5 cursor-pointer flex flex-row gap-1 justify-center items-center"
                >
                  <IconLogin2 />
                  Login
                </li>
              </Link>

              <Link rel="stylesheet" to="/signup">
                <li className="hover:brightness-125 text-white transition-colors bg-emerald-900 rounded-xl px-6 py-2 font-bold active:translate-y-0.5 cursor-pointer flex flex-row gap-1 justify-center items-center">
                  <IconUserPlus />
                  SignUp
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="bg-emerald-200 text-emerald-900 h-screen w-screen flex flex-row items-center">
          <div className="p-16 w-2/3 flex flex-col gap-12">
            <h1 className="text-6xl font-extrabold">
              MyLinkSet: Your All-in-One Bio Link
            </h1>
            <p className="text-emerald-950/70 font-semibold">
              MyLinkSet is a link-in-bio tool for social media. It creates a
              landing page with all your important links, accessible from one
              central URL in your bio.
            </p>
            <div className="flex gap-4 h-12">
              <div className="flex items-center rounded-xl px-6 bg-white/80 border-2 border-emerald-900">
                <p className="">mylinkset.vercel.app/</p>
              <input
                type="text"
                placeholder="Claim Your Username"
                className="bg-transparent outline-none"
              />
              </div>
              <button className="hover:brightness-125 text-white transition-colors bg-emerald-900 rounded-xl px-6 font-bold active:translate-y-0.5">
                Claim
              </button>
            </div>
          </div>
          <div>
            <img src="./mylinkset.png" alt="" onClick={login}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
