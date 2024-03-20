import { useState } from "react";
import { IconUserCircle, IconHome } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Menu from "../DropDown Menu/Menu";
import { useAppContext } from "../../App";

function Header() {
  const { user } = useAppContext();

  const [showMenu, setShowMenu] = useState(false);


  const onProfileClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };


  return (
    <>
      {showMenu && <Menu closeMenu={closeMenu} />}
      <div className="p-4 sticky top-0 bg-gray-300 z-50 select-none">
        <div className="flex flex-row justify-between bg-white rounded-full w-full sticky top-3">
          <Link className="flex" to="/">
            <ul className="flex flex-row p-2 gap-1 text-xl text-center items-center ps-8">
              <li className="text-center font-bold cursor-pointer text-lg">
                MyLinkSet
              </li>
            </ul>
          </Link>

          <ul className="flex flex-row p-2 gap-5 pe-5 items-center">

            {/* Is Is Used For Show Home Button In Header */}
            {/* <Link to="/">
              <div className="bg-black px-8 py-2 rounded-full hover:bg-opacity-75 active:translate-y-0.5">
                <IconHome className="text-white" />
              </div>
            </Link> */}

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
