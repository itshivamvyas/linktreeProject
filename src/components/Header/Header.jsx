import React from "react";
import { IconHome } from "@tabler/icons-react";
import { IconRobot } from "@tabler/icons-react";
import { IconLink } from "@tabler/icons-react";
import { IconLogin2 } from "@tabler/icons-react";
import { IconUserPlus } from "@tabler/icons-react";
import { IconLogout } from "@tabler/icons-react";

function Header() {
  return (
    <div className="p-4 sticky top-0 bg-gray-300 z-50">
      <div className="flex flex-row justify-between bg-white p-1 rounded-full w-full sticky top-3">
        <ul className="flex flex-row p-2 gap-3 text-xl text-center items-center ps-8">
          <li className="text-center items-center justify-center cursor-pointer">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 1024 1024"
              className="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M594.7 800.4H272.4c-10.7 0-19.4 8.7-19.4 19.4s8.7 19.4 19.4 19.4h322.3c10.7 0 19.4-8.7 19.4-19.4 0-10.8-8.7-19.4-19.4-19.4z"
                fill="#005BFF"
              />
              <path
                d="M912.9 771.4v39H968c-8.1-22.7-29.7-39-55.1-39z"
                fill="#E6E6E6"
              />
              <path
                d="M815.6 675.9V235.2c0-16.1-13.1-29.1-29.1-29.1H80.6c-16.1 0-29.1 13.1-29.1 29.1v440.7c0 16.1 13.1 29.1 29.1 29.1h705.9c16.1 0.1 29.1-13 29.1-29.1z m-43.9-42c0 16-13.1 29.1-29.1 29.1h-618c-16 0-29.1-13.1-29.1-29.1V277.3c0-16 13.1-29.1 29.1-29.1h618c16 0 29.1 13.1 29.1 29.1v356.6z"
                fill="#FFFFFF"
              />
              <path
                d="M742.6 248.2h-618c-16 0-29.1 13.1-29.1 29.1v356.6c0 16 13.1 29.1 29.1 29.1h618c16 0 29.1-13.1 29.1-29.1V277.3c0-16-13.1-29.1-29.1-29.1z m-523.3 32.2c0-1.6 1.3-2.8 2.8-2.8h61.3c1.6 0 2.8 1.3 2.8 2.8v17.5c0 1.6-1.3 2.8-2.8 2.8h-61.3c-1.6 0-2.8-1.3-2.8-2.8v-17.5z m-30.3-3.5c6.6 0 11.9 5.3 11.9 11.9s-5.3 11.9-11.9 11.9c-6.6 0-11.9-5.3-11.9-11.9s5.4-11.9 11.9-11.9z m-39 0c6.6 0 11.9 5.3 11.9 11.9s-5.3 11.9-11.9 11.9c-6.6 0-11.9-5.3-11.9-11.9s5.3-11.9 11.9-11.9z m237.3 181.7c0 67.8-55.2 123-123 123s-123-55.2-123-123 55.2-123 123-123h9.7v113.3h113.3v9.7z m-90.1-38.7v-94.7c52.3 0 94.7 42.4 94.7 94.7h-94.7z m373.6 148.9H530.1c-5.4 0-9.7-4.3-9.7-9.7 0-5.4 4.3-9.7 9.7-9.7h140.7c5.4 0 9.7 4.3 9.7 9.7 0 5.3-4.3 9.7-9.7 9.7z m0-73.3H525.2c-5.4 0-9.7-4.3-9.7-9.7s4.3-9.7 9.7-9.7h145.6c5.4 0 9.7 4.3 9.7 9.7s-4.3 9.7-9.7 9.7z m0-73.4H461.2c-5.4 0-9.7-4.3-9.7-9.7s4.3-9.7 9.7-9.7h209.7c5.4 0 9.7 4.3 9.7 9.7s-4.4 9.7-9.8 9.7z m0-73.3H461.2c-5.4 0-9.7-4.3-9.7-9.7s4.3-9.7 9.7-9.7h209.7c5.4 0 9.7 4.3 9.7 9.7s-4.4 9.7-9.8 9.7z"
                fill="#E6E6E6"
              />
              <path
                d="M254.6 355.5c-52.6 4.9-93.9 49.3-93.9 103.1 0 57.1 46.5 103.6 103.6 103.6 53.8 0 98.2-41.3 103.1-93.9H254.6V355.5z"
                fill="#FFFFFF"
              />
              <path
                d="M274 335.6h-9.7c-67.8 0-123 55.2-123 123s55.2 123 123 123 123-55.2 123-123v-9.7H274V335.6z m93.4 132.8c-4.9 52.6-49.3 93.9-103.1 93.9-57.1 0-103.6-46.5-103.6-103.6 0-53.8 41.3-98.2 93.9-103.1v112.8h112.8z"
                fill="#005BFF"
              />
              <path
                d="M297.2 325.2v94.7h94.7c0-52.3-42.4-94.7-94.7-94.7z"
                fill="#005BFF"
              />
              <path
                d="M150 288.8m-11.9 0a11.9 11.9 0 1 0 23.8 0 11.9 11.9 0 1 0-23.8 0Z"
                fill="#FFFFFF"
              />
              <path
                d="M189 288.8m-11.9 0a11.9 11.9 0 1 0 23.8 0 11.9 11.9 0 1 0-23.8 0Z"
                fill="#FFFFFF"
              />
              <path
                d="M222.1 300.7h61.3c1.6 0 2.8-1.3 2.8-2.8v-17.5c0-1.6-1.3-2.8-2.8-2.8h-61.3c-1.6 0-2.8 1.3-2.8 2.8v17.5c0 1.6 1.3 2.8 2.8 2.8z"
                fill="#FFFFFF"
              />
              <path
                d="M912.9 732.5c-47 0-86.3 33.5-95.3 77.8H701.9c-11.7 0-20.2-2.3-23.2-6.3-2-2.7-2-7-2-9v-51.1h109.9c37.5 0 67.9-30.5 67.9-67.9V235.2c0-37.5-30.5-67.9-67.9-67.9h-706c-37.5 0-67.9 30.5-67.9 67.9v440.7c0 37.5 30.5 67.9 67.9 67.9h557.2V795c0 4.8 0 19.3 9.9 32.4 10.9 14.4 29.1 21.7 54.2 21.7h308.2v-19.4c0-53.6-43.6-97.2-97.2-97.2zM80.6 705.1c-16.1 0-29.1-13.1-29.1-29.1V235.2c0-16.1 13.1-29.1 29.1-29.1h705.9c16.1 0 29.1 13.1 29.1 29.1v440.7c0 16.1-13.1 29.1-29.1 29.1H80.6z m832.3 105.2h-55.1c8-22.7 29.7-39 55.1-39s47.1 16.3 55.1 39h-55.1z"
                fill="#005BFF"
              />
              <path
                d="M670.8 329.4H461.2c-5.4 0-9.7 4.3-9.7 9.7s4.3 9.7 9.7 9.7h209.7c5.4 0 9.7-4.3 9.7-9.7s-4.4-9.7-9.8-9.7z"
                fill="#005BFF"
              />
              <path
                d="M670.8 402.7H461.2c-5.4 0-9.7 4.3-9.7 9.7s4.3 9.7 9.7 9.7h209.7c5.4 0 9.7-4.3 9.7-9.7s-4.4-9.7-9.8-9.7zM670.8 476.1H525.2c-5.4 0-9.7 4.3-9.7 9.7s4.3 9.7 9.7 9.7h145.6c5.4 0 9.7-4.3 9.7-9.7s-4.3-9.7-9.7-9.7z"
                fill="#06F3FF"
              />
              <path
                d="M670.8 549.4H530.1c-5.4 0-9.7 4.3-9.7 9.7 0 5.4 4.3 9.7 9.7 9.7h140.7c5.4 0 9.7-4.3 9.7-9.7 0-5.4-4.3-9.7-9.7-9.7z"
                fill="#005BFF"
              />
            </svg>
          </li>
          <li className="text-center font-bold cursor-pointer bg-gradient-to-r from-sky-600 via-pink-600 to-sky-600 bg-clip-text text-transparent">
            Your LinkTree
          </li>
        </ul>

        <ul className="flex flex-row p-2 gap-5 pe-5">
          <li className="hover:bg-indigo-700 transition-colors hover:text-white rounded-3xl p-2.5 min-w-28 text-center font-bold cursor-pointer flex flex-row gap-2">
            <IconHome /> Home
          </li>
          <li className="hover:bg-indigo-700 transition-colors hover:text-white rounded-3xl p-2.5 min-w-28 text-center font-bold cursor-pointer flex flex-row gap-2">
            <IconRobot /> About Us
          </li>
          <li className="hover:bg-indigo-700 transition-colors hover:text-white rounded-3xl p-2.5 min-w-28 text-center font-bold cursor-pointer flex flex-row gap-2">
            <IconLink /> Links
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
        </ul>
      </div>
    </div>
  );
}

export default Header;
