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
              <li className="text-center font-bold cursor-pointer text-2xl">
                Your LinkTree
              </li>
              <li className="text-center items-center justify-center font-bold cursor-pointer text-indigo-700">
                <IconGrowth className="text-black" />
              </li>
            </ul>
            <ul className="flex flex-row p-2 gap-5 pe-5 items-center">
              <Link rel="stylesheet" to="/links">
                <li
                  className="hover:bg-black transition-colors hover:text-white bg-gray-100 rounded-xl p-2 min-w-28 font-bold cursor-pointer flex flex-row gap-1 text-sm justify-center items-center"
                  onClick={login}
                >
                  <IconLogin2 />
                  Login
                </li>
              </Link>

              <Link rel="stylesheet" to="/signup">
                <li className="hover:bg-black transition-colors hover:text-white bg-gray-100 rounded-xl p-2 min-w-28 font-bold cursor-pointer flex flex-row gap-1 text-sm justify-center items-center">
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
              Linktree: Your All-in-One Bio Link
            </h1>
            <p className="text-emerald-950/70 font-semibold">
              Linktree is a link-in-bio tool for social media. It creates a
              landing page with all your important links, accessible from one
              central URL in your bio.
            </p>
            <div className="flex gap-2 h-12">
              <input
                type="text"
                placeholder="Get Your LinkTree"
                className="bg-white/80 rounded-xl p-4"
              />
              <button className="hover:brightness-110 text-white transition-colors bg-emerald-900 rounded-xl px-6 font-bold active:translate-y-0.5">
                Get LinkTree
              </button>
            </div>
          </div>
          <div>
            <img src="./linktree.png" width={700} height={700} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
