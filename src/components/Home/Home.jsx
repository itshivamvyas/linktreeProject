import React from "react";
import { IconLogin2, IconUserPlus, IconGrowth } from "@tabler/icons-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <div className="fixed top-0 w-full z-50 p-8">
          <div className="bg-white rounded-full flex p-2 flex-row justify-between">
            <ul className="flex flex-row p-2 gap-3 text-xl text-center items-center ps-8">
              <li className="text-center items-center justify-center font-bold cursor-pointer text-indigo-700">
                <IconGrowth className="text-black" />
              </li>
              <li className="text-center font-bold cursor-pointer text-lg">
                Your LinkTree
              </li>
            </ul>
            <ul className="flex flex-row p-2 gap-5 pe-5 items-center">
              <Link rel="stylesheet" to="/login">
                <li className="hover:bg-black transition-colors hover:text-white bg-gray-50 rounded-xl p-2 min-w-28 font-bold cursor-pointer flex flex-row gap-1 text-sm justify-center items-center">
                  <IconLogin2 />
                  Login
                </li>
              </Link>

              <Link rel="stylesheet" to="/signup">
                <li className="hover:bg-black transition-colors hover:text-white bg-gray-50 rounded-xl p-2 min-w-28 font-bold cursor-pointer flex flex-row gap-1 text-sm justify-center items-center">
                  <IconUserPlus />
                  SignUp
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="bg-green-300 h-screen w-screen"></div>
        <div className="bg-red-100 h-screen w-screen"></div>
        <div className="bg-indigo-300 h-screen w-screen"></div>
        <div className="bg-orange-300 h-screen w-screen"></div>
      </div>
    </div>
  );
}

export default Home;
