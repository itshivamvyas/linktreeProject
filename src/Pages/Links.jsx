import React, { useState } from "react";
import Todo from "./Todo";
import Preview from "../components/Preview Section/Preview";
import Modal from "../components/AddButtonModal/Modal";

function Links() {
  const [linksData, setLinksData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const setData = () => {
    setLinksData([
      ...linksData,
      {
        title: `Title ${linksData.length + 1}`,
        url: `https://example.com/${linksData.length + 1}`,
      },
    ]);
  };

  const onAddClick = () => {
    window.scrollTo({
      top: 75,
      behavior: "smooth",
    });

    setShowModal(true);
  };

  const LinkComps = linksData.map((link) => (
    <Todo key={link.title} title={link.title} url={link.url} />
  ));

  return (
    <div>
      <div className="min-h-[calc(100vh-105px)]">
        <div className="grid grid-cols-10">
          <div className="col-span-6">
            <section className="p-10 max-w-2xl mx-auto">
              <div className="bg-gray-200 pt-5 sticky top-[93px] mb-14 z-50 rounded-b-[32px]">
                <button
                  onClick={onAddClick}
                  id="add"
                  className="flex justify-center items-center select-none gap-2 p-5 bg-black rounded-full text-white font-bold w-full hover:bg-opacity-85 shadow-lg shadow-black/40 z-50 transition-transform active:translate-y-0.5"
                >
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

              {LinkComps}

              {showModal && <Modal closeModal={closeModal} addButton={setData} />}

            </section>
          </div>

          <Preview />
        </div>
      </div>
    </div>
  );
}

export default Links;
