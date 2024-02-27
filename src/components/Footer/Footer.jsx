import React from "react";
import { IconHome } from "@tabler/icons-react";
import { IconRobot } from "@tabler/icons-react";
import { IconPhoneCall } from "@tabler/icons-react";

function Footer() {
  return (
    <div className="p-5 rounded-3xl bg-gray-300">
      <div className="flex flex-row justify-around rounded-2xl bg-white min-h-32 items-center">
        <span className="font-bold">
          2024 Itshivamvyas. All rights reserved.
        </span>

        <p className="flex flex-row gap-16 list-none text-center font-bold">
          <li className="hover:bg-indigo-700 hover:text-white rounded-3xl p-2.5 min-w-28 text-center font-bold cursor-pointer flex flex-row gap-2">
            <IconHome /> Home
          </li>
          <li className="hover:bg-indigo-700 hover:text-white rounded-3xl p-2.5 min-w-28 text-center font-bold cursor-pointer flex flex-row gap-2">
            <IconRobot /> About Us
          </li>
          <li className="hover:bg-indigo-700 hover:text-white rounded-3xl p-2.5 min-w-28 text-center font-bold cursor-pointer flex flex-row gap-2">
            <IconPhoneCall /> Contact Us
          </li>
        </p>
      </div>
    </div>
  );
}

export default Footer;
