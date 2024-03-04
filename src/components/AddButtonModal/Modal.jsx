import React, { useEffect, useState } from "react";
import { IconX } from "@tabler/icons-react";

function Modal({ closeModal, setData }) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900 bg-opacity-50 backdrop-blur-[1px] px-4"
      onClick={closeModal}
    >
      <div
        className="bg-white max-w-96 w-full rounded-3xl p-8 shadow-2xl flex flex-col justify-between gap-5 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 hover:bg-slate-200 text-stone-600 p-1 rounded-full cursor-pointer active:translate-y-0.5"
          onClick={closeModal}
        >
          <IconX height={22} width={22} />
        </button>
        <div className="flex flex-col gap-4">
          <div>
            <div className="select-none">
              <label htmlFor="title">
                <p className="mb-2">Title</p>
                <input
                  type="text"
                  id="title"
                  placeholder="Enter Title"
                  className="py-2 px-3 outline-none bg-gray-100 rounded-lg w-full focus:bg-gray-50 focus:outline-black"
                  required
                />
              </label>
            </div>
          </div>
          <div>
            <h1 className="select-none">
              <label htmlFor="url">
                <p className="mb-2">URL</p>
                <input
                  type="text"
                  id="url"
                  placeholder="Enter URL"
                  className="py-2 px-3 outline-none bg-gray-100 rounded-lg w-full focus:bg-gray-50 focus:outline-black"
                  required
                />
              </label>
            </h1>
          </div>
        </div>

        <div
          className="flex justify-center items-center gap-2 p-2 bg-black rounded-lg text-white font-bold w-full hover:bg-opacity-85 shadow-lg shadow-black/40 z-50 transition-transform active:translate-y-0.5 mt-4">
          <button className="select-none" onClick={setData}>Add Link</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
