import React from "react";
import Todo from "./Todo";

function Links() {
  return (
    <div className="p-5">
      <div className="grid grid-cols-2">
        <section className="flex-1">
          <button className="flex justify-center items-center gap-2 p-3 bg-black rounded-full text-white font-bold w-full">
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

          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
        </section>

        <section className="flex-1">
          <div className="flex fixed p-10">
            <p>Preview Section Hai Bhai</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Links;
