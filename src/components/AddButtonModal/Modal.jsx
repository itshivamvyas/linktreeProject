import React, { useEffect } from "react";
import { IconX } from "@tabler/icons-react";

function Modal() {

  const [title, setTitle] = useState("")
  const [url, setUrl] = useState("")

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900 bg-opacity-50 backdrop-blur-[1px]">
      <div className="border-[3px] border-white rounded-3xl min-w-[50%] min-h-[40%] p-[2px]">
        <div className="bg-white rounded-3xl min-w-[50%] min-h-[40%] p-6 shadow-2xl flex flex-col justify-between gap-8">
          <div className="text-right">
            <button>
              <IconX height={40} width={40} />
            </button>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-2xl p-2 select-none">
                <label htmlFor="title">
                  <h1 className="font-bold">Title</h1>
                  <input
                    type="text"
                    id="title"
                    placeholder="Enter Title"
                    className="text-xl w-full p-4 outline-none"
                  />
                </label>
              </h1>
            </div>
            <div>
              <h1 className="text-2xl p-2 select-none">
                <label htmlFor="url">
                  <h1 className="font-bold">URL</h1>
                  <input
                    type="text"
                    id="url"
                    placeholder="Enter URL"
                    className="text-xl w-full p-4 outline-none"
                  />
                </label>
              </h1>
            </div>
          </div>

          <div className="flex justify-center items-center text-xl gap-2 p-4 bg-black rounded-full text-white font-bold w-full hover:bg-opacity-85 shadow-lg shadow-black/40 z-50 transition-transform active:translate-y-0.5">
            <button className="select-none">Add Link</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
