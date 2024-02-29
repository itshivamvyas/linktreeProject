import React from "react";
import {
  IconBrandLinktree,
  IconPhoneCall,
  IconRobot,
  IconLink,
  IconLogin2,
  IconUserPlus,
  IconLogout,
} from "@tabler/icons-react";

function Header() {
  return (
    <div className="p-4 sticky top-0 bg-gray-300 z-50">
      <div className="flex flex-row justify-between bg-white p-1 rounded-full w-full sticky top-3">
        <ul className="flex flex-row p-2 gap-3 text-xl text-center items-center ps-8">
          <li className="text-center items-center justify-center font-bold cursor-pointer">
            <IconBrandLinktree />
          </li>
          <li className="text-center font-bold cursor-pointer bg-gradient-to-r from-sky-600 via-pink-600 to-sky-600 bg-clip-text text-transparent font-pacifico">
            Your LinkTree
          </li>
        </ul>

        <ul className="flex flex-row p-2 gap-5 pe-5 items-center">
          <li className="hover:bg-indigo-700 transition-colors hover:text-white rounded-3xl p-2.5 min-w-28 text-center font-bold cursor-pointer flex flex-row gap-2">
            <IconLink /> Links
          </li>
          <li className="hover:bg-indigo-700 transition-colors hover:text-white rounded-3xl p-2.5 min-w-28 text-center font-bold cursor-pointer flex flex-row gap-2">
            <IconRobot /> About Us
          </li>
          <li className="hover:bg-indigo-700 hover:text-white rounded-3xl p-2.5 min-w-28 text-center font-bold cursor-pointer flex flex-row gap-2">
            <IconPhoneCall /> Contact Us
          </li>
          <li className="hover:bg-indigo-700 transition-colors hover:text-white rounded-3xl p-2.5 min-w-28 text-center font-bold cursor-pointer flex flex-row gap-2">
            <IconLogin2 /> Login
          </li>
          <li className="hover:bg-indigo-700 transition-colors hover:text-white rounded-3xl p-2.5 min-w-28 text-center font-bold cursor-pointer flex flex-row gap-2">
            <IconUserPlus /> SignUp
          </li>
          <li className="hover:bg-indigo-700 transition-colors hover:text-white rounded-3xl p-2.5 min-w-28 text-center font-bold cursor-pointer flex flex-row gap-2">
            <IconLogout /> Logout
          </li>
          <li className="cursor-pointer flex justify-center items-center font-semibold text-xl font-pacifico">
            <h1>Hi, Shivam Vyas</h1>
          </li>
          <li className="cursor-pointer">
            <img src="./Shivam.jpg" alt=""  width={50} height={50} className="rounded-full hover:scale-110 transition-transform border-4"/>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
