import React from "react";
import { Link } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";

function Yourprofile() {
  return (
    <div className="bg-white min-h-screen w-screen flex flex-col items-center justify-center">
      <Link rel="stylesheet" to="/">
        <IconArrowLeft className="absolute top-8 left-10 hover:bg-gray-500 active:translate-y-0.5 cursor-pointer rounded-full size-8 text-white bg-black" />
      </Link>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center">
          <img src="./user.png" alt="user" className="size-60 cursor-pointer rounded-full" />
          <p className="cursor-pointer">Change Profile Picture</p>
        </div>
        <form action="" className="flex flex-col gap-16 min-w-[700px] p-6">
            <div className="flex flex-col gap-6">
          <div>
            <label htmlFor="name" className="flex flex-col gap-1">
              <p className="ps-2">Your Name</p>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                className="p-3 rounded-xl bg-slate-100 outline-none focus-within:ring-2 ring-black"
              />
            </label>
          </div>

          <div>
            <label htmlFor="username" className="flex flex-col gap-1">
              <p className="ps-2">Your Username</p>
              <input
              disabled
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
              className="flex justify-center items-center select-none gap-2 py-3 px-5 bg-black rounded-xl text-white font-bold w-full hover:bg-opacity-85 shadow-lg shadow-black/40 z-50 transition-transform active:translate-y-0.5">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Yourprofile
