import React from "react";
import {
  IconPhoneCall,
  IconRobot,
  IconUserScan,
  IconShirt,
  IconLogout,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="fixed right-4 z-50 top-[93px] shadow-2xl shadow-indigo-300">
      <div className="float-right bg-white rounded-lg">
        <ul>
          <li className="flex flex-row gap-3 p-3 cursor-pointer min-w-60 font-semibold hover:bg-indigo-700 rounded-t-lg hover:text-white active:translate-y-0.5">
            <IconUserScan /> Your Profile
          </li>
          <li className="flex flex-row gap-3 p-3 cursor-pointer min-w-60 font-semibold hover:bg-indigo-700 hover:text-white active:translate-y-0.5">
            <IconShirt /> Themes
          </li>
          <Link rel="stylesheet" to="/about-us">
            <li className="flex flex-row gap-3 p-3 cursor-pointer min-w-60 font-semibold hover:bg-indigo-700 hover:text-white active:translate-y-0.5">
              <IconRobot />
              About Us
            </li>
          </Link>

          <Link rel="stylesheet" to="/contact-us">
            <li className="flex flex-row gap-3 p-3 cursor-pointer min-w-60 font-semibold hover:bg-indigo-700 hover:text-white active:translate-y-0.5">
              <IconPhoneCall />
              Contact Us
            </li>
          </Link>
          <li className="flex flex-row gap-3 p-3 cursor-pointer min-w-60 font-semibold hover:bg-indigo-700 rounded-b-lg hover:text-white active:translate-y-0.5">
            <IconLogout /> Logout
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
