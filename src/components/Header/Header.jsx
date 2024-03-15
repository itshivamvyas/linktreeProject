import { useState } from "react";
import { IconLink, IconGrowth, IconUserCircle } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Menu from "../DropDown Menu/Menu";
import { useAppContext } from "../../App";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const onclickHandler = () => {
    setOpenMenu(!openMenu);
  };

  const {user} = useAppContext()

  return (
    <>
      {openMenu && <Menu onclickHandler={onclickHandler}/>}
      <div className="p-4 sticky top-0 bg-gray-300 z-50 select-none">
        <div className="flex flex-row justify-between bg-white rounded-full w-full sticky top-3">
          <ul className="flex flex-row p-2 gap-1 text-xl text-center items-center ps-8">
            <li className="text-center font-bold cursor-pointer text-lg">
            MyLinkSet
            </li>
            <li className="text-center items-center justify-center font-bold cursor-pointer text-indigo-700">
              <IconGrowth className="text-black" />
            </li>
          </ul>

          <ul className="flex flex-row p-2 gap-5 pe-5 items-center">
            <Link rel="stylesheet" to="/">
              <li className="hover:bg-black transition-colors hover:text-white rounded-full p-2 min-w-28 font-bold cursor-pointer flex flex-row gap-1 text-sm justify-center items-center">
                <IconLink />
                Links
              </li>
            </Link>

            <li className="cursor-pointer flex justify-center items-center font-semibold text-xl">
              <span className="font-bold">Hi, {user.name}</span>
            </li>
            <li className="cursor-pointer">
              <IconUserCircle className="rounded-full hover:scale-110 transition-transform border-4 size-10 active:translate-y-0.5" onClick={onclickHandler}/>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
