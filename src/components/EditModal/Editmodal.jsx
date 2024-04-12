import { useEffect, useState } from "react";
import { IconX } from "@tabler/icons-react";
import { updateDoc } from "firebase/firestore";
import { useAppContext } from "../../App";
import { updateUserLink } from "../../firebase/firestore";

function Editmodal({ closeEditModal, id, title, url }) {
  const { user } = useAppContext();
  const [titleInput, setTitleInput] = useState(title);
  const [urlInput, setUrlInput] = useState(url);
  const [titleError, setTitleError] = useState(false);
  const [urlError, setUrlError] = useState(false);

  const onSave = async (e) => {
    e.preventDefault();

    if (titleInput.length === 0) {
      setTitleError();
      return;
    }

    if (urlInput.length === 0) {
      setUrlError(true);
      return;
    }

    await updateUserLink(user.username, id, {
      title: titleInput,
      url: urlInput,
    });

    closeEditModal();
  };

  const titleHandler = (e) => {
    setTitleError(false);
    setTitleInput(e.target.value);
  };

  const urlHandler = (e) => {
    setUrlError(false);
    setUrlInput(e.target.value);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900 bg-opacity-50 backdrop-blur-[1px] px-4"
      onClick={closeEditModal}
    >
      <div
        className="bg-white max-w-96 w-full rounded-3xl p-8 shadow-2xl flex flex-col justify-between gap-5 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <form>
          <button
            className="absolute top-4 right-4 hover:bg-slate-200 text-stone-600 p-1 rounded-full cursor-pointer active:translate-y-0.5"
            onClick={closeEditModal}
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
                    className={`py-2 px-3 outline-none ring-1 bg-gray-100 rounded-lg w-full focus:bg-gray-50  ${
                      titleError ? "ring-red-700" : "focus:outline-black"
                    }`}
                    value={titleInput}
                    onChange={titleHandler}
                  />
                  {titleError && (
                    <p className="text-red-700 ps-2 p-1">Title is required!</p>
                  )}
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
                    className={`py-2 px-3 outline-none ring-1 bg-gray-100 rounded-lg w-full focus:bg-gray-50  ${
                      urlError ? "ring-red-700" : "focus:outline-black"
                    }`}
                    value={urlInput}
                    onChange={urlHandler}
                  />
                  {urlError && (
                    <p className="text-red-700 ps-2 p-1">Url is required!</p>
                  )}
                </label>
              </h1>
            </div>
          </div>

          <div
            className="flex justify-center items-center mt-10 p-2 bg-black rounded-lg text-white font-bold w-full hover:bg-opacity-85 shadow-lg shadow-black/40 z-50 transition-transform active:translate-y-0.5"
            onClick={onSave}
          >
            <button className="select-none">Update Link</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Editmodal;
