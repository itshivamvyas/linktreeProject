import {
  IconStar,
  IconTrash,
  IconExternalLink,
  IconEdit,
  IconShare,
} from "@tabler/icons-react";
import { useState } from "react";

function Todo() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex flex-col gap-6 bg-white p-8 rounded-3xl mt-5">
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <h1 className="font-semibold text-stone-800">Your LinkTree</h1>
          </div>
          <div className="flex gap-3">
            <p className="text-stone-600 tracking-wide">
              https://skvlinktree.vercel.app/
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-3 justify-center items-center">
          <div className="hover:bg-slate-200 p-3 rounded-full cursor-pointer">
          <IconShare size={22} className="text-stone-600" />
          </div>

          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

      <div className="flex flex-row justify-between w-full text-stone-600">
        <div className="flex gap-6 text-stone-600">
          <div className="hover:bg-slate-200 p-3 rounded-full cursor-pointer">
          <IconEdit size={22} />
          </div>
          <div className="hover:bg-slate-200 p-3 rounded-full cursor-pointer">
          <IconExternalLink size={22} />
          </div>
          <div className="hover:bg-slate-200 p-3 rounded-full cursor-pointer">
          <IconStar size={22} />
          </div>
        </div>

        <div className="hover:bg-red-200 p-3 rounded-full cursor-pointer">
          <IconTrash className="text-red-500" size={22} />
        </div>
      </div>
    </div>
  );
}

export default Todo;
