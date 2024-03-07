import {
  IconStar,
  IconTrash,
  IconExternalLink,
  IconEdit,
  IconShare,
} from "@tabler/icons-react";
import { useState } from "react";

function Todo({title, url}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex flex-col gap-6 bg-white p-8 rounded-3xl mt-5 hover:scale-105 transition-transform active:translate-y-0.5">
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <h1 className="font-semibold text-stone-800">{title}</h1>
          </div>
          <div className="flex gap-3">
            <p className="text-stone-600 tracking-wide">
              {url}
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-3 justify-center items-center">
          <Icon icon={IconShare} />

          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

      <div className="flex flex-row justify-between w-full text-stone-600">
        <div className="flex gap-6">
          <Icon icon={IconEdit} />

          <Icon icon={IconExternalLink} />
          <Icon icon={IconStar} />
        </div>

        <Icon icon={IconTrash} isDanger={true} />
      </div>
    </div>
  );
}

function Icon({ icon, isDanger }) {
  const I = icon;

  const dangerClassName = isDanger
    ? "hover:bg-red-200 text-red-500"
    : "hover:bg-slate-200 text-stone-600";

  return (
    <div
      className={`${dangerClassName} p-2 rounded-full cursor-pointer active:translate-y-0.5`}
    >
      <I size={22} />
    </div>
  );
}

export default Todo;
