import React from "react";
import Todo from "./Todo";
import Preview from "../components/Preview Section/Preview";
import Header from "../components/Header/Header";

function Links() {
  const onAddClick = () => {
    window.scrollTo({
      top: 75,
      behavior: "smooth"
    });
  }

  return (
    <>
      <Header />
      <div className="pb-5">
        <div className="grid grid-cols-10">
          <div className="col-span-6">
            <section className="p-10 max-w-2xl mx-auto">
              <div className="bg-gray-200 pt-5 sticky top-[106px] mb-14 z-50 rounded-b-[32px]">
                <button onClick={onAddClick} id="add" className="flex justify-center items-center gap-2 p-5 bg-indigo-800 rounded-full text-white font-bold w-full hover:bg-indigo-700 z-50">
                  <svg
                    width="22px"
                    height="22px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="#fcfcfd"
                      d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                    />
                  </svg>
                  Add Link
                </button>
              </div>

              <Todo />
              <Todo />
              <Todo />
              <Todo />
              <Todo />
              <Todo />
              <Todo />
              <Todo />
            </section>
          </div>

          <Preview />
        </div>
      </div>
    </>
  );
}

export default Links;
