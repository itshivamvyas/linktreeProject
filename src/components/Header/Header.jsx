import { useState } from "react";
import { IconGrowth, IconUserCircle } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Menu from "../DropDown Menu/Menu";
import { useAppContext } from "../../App";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const onProfileClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const { user } = useAppContext();

  return (
    <>
      {showMenu && <Menu closeMenu={closeMenu} />}
      <div className="p-4 sticky top-0 bg-gray-300 z-50 select-none">
        <div className="flex flex-row justify-between bg-white rounded-full w-full sticky top-3">
          
          <Link className="flex" to="/" >
            <ul className="flex flex-row p-2 gap-1 text-xl text-center items-center ps-8">
              <li className="text-center font-bold cursor-pointer text-lg">
                MyLinkSet
              </li>
              <li className="text-center items-center justify-center font-bold cursor-pointer text-indigo-700">
                <IconGrowth className="text-black" />
              </li>
            </ul>
            </Link>
          
          <ul className="flex flex-row p-2 gap-5 pe-5 items-center">
            <li className="cursor-pointer flex justify-center items-center font-semibold text-xl">
              <span className="font-bold">Hi, {user.name}</span>
            </li>
            <li className="cursor-pointer">
              {user.picture ? (
                <img
                  src={user.picture}
                  alt="User"
                  className="rounded-full hover:scale-110 transition-transform border-4 size-10 active:translate-y-0.5"
                  onClick={onProfileClick}
                />
              ) : (
                <IconUserCircle
                  className="rounded-full hover:scale-110 transition-transform border-4 size-10 active:translate-y-0.5"
                  onClick={onProfileClick}
                />
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
