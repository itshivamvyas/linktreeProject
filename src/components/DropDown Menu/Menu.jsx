import React from "react";
import {
  IconPhoneCall,
  IconRobot,
  IconUserScan,
  IconShirt,
  IconLogout,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

function Menu({onclickHandler}) {
  return (
    <div className="fixed right-4 z-50 top-[93px] shadow-2xl shadow-indigo-300 select-none">
      <div className="float-right bg-white rounded-lg">
        <ul>
          <li className="flex flex-row gap-3 p-3 cursor-pointer min-w-60 font-semibold hover:bg-black rounded-t-lg hover:text-white active:translate-y-0.5" onClick={onclickHandler}>
            <IconUserScan /> Your Profile
          </li>
          <li className="flex flex-row gap-3 p-3 cursor-pointer min-w-60 font-semibold hover:bg-black hover:text-white active:translate-y-0.5" onClick={onclickHandler}>
            <IconShirt /> Themes
          </li>
          <Link rel="stylesheet" to="/about-us">
            <li className="flex flex-row gap-3 p-3 cursor-pointer min-w-60 font-semibold hover:bg-black hover:text-white active:translate-y-0.5" onClick={onclickHandler}>
              <IconRobot />
              About Us
            </li>
          </Link>

          <Link rel="stylesheet" to="/contact-us">
            <li className="flex flex-row gap-3 p-3 cursor-pointer min-w-60 font-semibold hover:bg-black hover:text-white active:translate-y-0.5" onClick={onclickHandler}>
              <IconPhoneCall />
              Contact Us
            </li>
          </Link>
          <li className="flex flex-row gap-3 p-3 cursor-pointer min-w-60 font-semibold hover:bg-black rounded-b-lg hover:text-white active:translate-y-0.5" onClick={onclickHandler}>
            <IconLogout /> Logout
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
