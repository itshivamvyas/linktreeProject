import React from "react";
import { Link } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
import { useAppContext } from "../App";

function Userdetails() {
  const {user} = useAppContext()
  return (
    <div className="bg-emerald-200 min-h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center items-center w-full">
        <div>
          {user ? <img src={user.picture} alt="User" className="rounded-full size-36"/> : <img src="./user.png" alt="user" className="size-60 cursor-pointer rounded-full" />}
        </div>
        <div action="" className="flex flex-col gap-16 min-w-[700px] p-6">
            <div className="flex flex-col gap-6">
          <div>
            <label htmlFor="name" className="flex flex-col gap-1">
              <p className="ps-2">Your Name</p>
              <input
                type="text"
                id="name"
                // {user.name && value={user.name}
                placeholder="Enter Your Name"
                className="p-3 rounded-xl bg-slate-100 outline-none focus-within:ring-2 ring-black"
              />
            </label>
          </div>

          <div>
            <label htmlFor="username" className="flex flex-col gap-1">
              <p className="ps-2">Your Username</p>
              <input
                type="text"
                id="username"
                placeholder="Enter Your Username"
                className="p-3 rounded-xl bg-slate-100 outline-none focus-within:ring-2 ring-black"
              />
            </label>
          </div>

          </div>
          <div>
            <button
              type="submit"
              className="flex justify-center items-center select-none gap-2 py-3 px-5 bg-emerald-900 rounded-xl text-emerald-200 font-bold w-full hover:bg-opacity-85 shadow-lg shadow-black/40 z-50 transition-transform active:translate-y-0.5">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userdetails;
