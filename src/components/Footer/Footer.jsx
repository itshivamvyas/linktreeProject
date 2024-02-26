import React from "react";

function Footer() {
  return (
    <div className="p-5 rounded-3xl bg-gray-300">
      <div className="flex flex-row justify-around rounded-2xl bg-white min-h-32 items-center">
        <span className="font-bold">
          2024 Itshivamvyas. All rights reserved.
        </span>

        <p className="flex flex-row gap-16 list-none text-center font-bold">
          <li className="hover:bg-red-400 cursor-pointer rounded-3xl p-2.5 min-w-24 text-center font-bold">
            Home
          </li>
          <li className="hover:bg-red-400 cursor-pointer rounded-3xl p-2.5 min-w-24 text-center font-bold">
            About Us
          </li>
          <li className="hover:bg-red-400 cursor-pointer rounded-3xl p-2.5 min-w-24 text-center font-bold">
            Contact Us
          </li>
        </p>
      </div>
    </div>
  );
}

export default Footer;
