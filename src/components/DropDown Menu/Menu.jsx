import React, { useContext, useEffect, useRef } from "react";
import {
  IconPhoneCall,
  IconRobot,
  IconUserScan,
  IconShirt,
  IconLogout,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { Context } from "../../App";

function Menu({ closeMenu }) {
  const { logoutUser } = useContext(Context);

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
          <li
            className="flex flex-row gap-3 p-3 cursor-pointer min-w-60 font-semibold hover:bg-black rounded-t-lg hover:text-white active:translate-y-0.5"
            onClick={closeMenu}
          >
            <IconUserScan /> Your Profile
          </li>

          <Link to="/themes" >
          <li
            className="flex flex-row gap-3 p-3 cursor-pointer min-w-60 font-semibold hover:bg-black hover:text-white active:translate-y-0.5"
            onClick={closeMenu}
          >
            <IconShirt /> Themes
          </li>
          </Link>
          <Link rel="stylesheet" to="/about-us">
            <li
              className="flex flex-row gap-3 p-3 cursor-pointer min-w-60 font-semibold hover:bg-black hover:text-white active:translate-y-0.5"
              onClick={closeMenu}
            >
              <IconRobot />
              About Us
            </li>
          </Link>

          <Link rel="stylesheet" to="/contact-us">
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
            onClick={logoutUser}
          >
            <IconLogout /> Logout
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
