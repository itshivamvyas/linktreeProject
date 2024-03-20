import React, { useContext, useEffect, useRef } from "react";
import {
  IconPhoneCall,
  IconRobot,
  IconUserScan,
  IconShirt,
  IconLogout,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { logout } from "../../firebase/auth";

function Menu({ closeMenu }) {

  useEffect(() => {
    document.body.addEventListener("click", closeMenu);
    return () => {
      document.body.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <div className="fixed right-4 z-50 top-[93px] shadow-2xl shadow-indigo-300 select-none">
      <div className="float-right bg-white rounded-lg">
        <ul>
          <Link to="/yourprofile" >
          <li
            className="flex flex-row gap-3 p-3 cursor-pointer min-w-60 font-semibold hover:bg-black rounded-t-lg hover:text-white active:translate-y-0.5"
            onClick={closeMenu}
          >
            <IconUserScan /> Your Profile
          </li>
          </Link>
          <Link to="/themes" >
          <li
            className="flex flex-row gap-3 p-3 cursor-pointer min-w-60 font-semibold hover:bg-black hover:text-white active:translate-y-0.5"
            onClick={closeMenu}
          >
            <IconShirt /> Themes
          </li>
          </Link>
          <Link rel="stylesheet" to="/aboutus">
            <li
              className="flex flex-row gap-3 p-3 cursor-pointer min-w-60 font-semibold hover:bg-black hover:text-white active:translate-y-0.5"
              onClick={closeMenu}
            >
              <IconRobot />
              About Us
            </li>
          </Link>

          <Link rel="stylesheet" to="/contactus">
            <li
              className="flex flex-row gap-3 p-3 cursor-pointer min-w-60 font-semibold hover:bg-black hover:text-white active:translate-y-0.5"
              onClick={closeMenu}
            >
              <IconPhoneCall />
              Contact Us
            </li>
          </Link>

          <li
            className="flex flex-row gap-3 p-3 cursor-pointer min-w-60 font-semibold hover:bg-black rounded-b-lg hover:text-white active:translate-y-0.5"
            onClick={logout}
          >
            <IconLogout /> Logout
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
