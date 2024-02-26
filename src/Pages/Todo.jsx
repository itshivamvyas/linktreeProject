import React from "react";
import { IconStar } from "@tabler/icons-react";
import { IconExternalLink } from "@tabler/icons-react";
import { IconEdit } from "@tabler/icons-react";
import { IconShare } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";

function Todo() {
  return (
    <div className="flex flex-col gap-5 bg-white text-black p-10 rounded-3xl mt-5">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-3">
            <h1 className="font-bold">Your LinkTree</h1>
            <IconEdit />
          </div>
          <div className="flex flex-row gap-3">
            <p className="font-semibold">https://skvlinktree.vercel.app/</p>
            <IconEdit />
          </div>
        </div>

        <div className="flex flex-row gap-3 justify-center items-center">
          <IconShare />

          <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" id="toggle" value="" class="sr-only peer" />
            <span class="relative w-10 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border-2 after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></span>
          </label>
        </div>
      </div>

      <div className="flex flex-row justify-between w-full">
        <div className="flex gap-2">
          <IconExternalLink />
          <IconStar />
        </div>

        <div>
          <IconTrash />
        </div>
      </div>
    </div>
  );
}

export default Todo;
