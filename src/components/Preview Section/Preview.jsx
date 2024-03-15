import { useAppContext } from "../../App";

function Preview() {
  const { linksData } = useAppContext();

  return (
    <div className="col-span-4 flex justify-center p-10">
      <div className="fixed select-none">
        <div className="bg-white rounded-3xl p-4 border-8 border-black aspect-[9_/_19] h-[calc(100vh-150px)] overflow-y-auto no-scrollbar">
          <div className="text-justify">
            <div className="flex flex-col gap-2 justify-center items-center p-4">
            <img
                className="rounded-full max-w-20 max-h-20"
                src="./Shivam.jpg"
                alt=""
              />
              <h1 className="font-bold">@Itshivamvyas</h1>
            </div>

            <div className="flex flex-col gap-3 cursor-pointer">
              {linksData.map((it) => (
                <div key={it.title} className="bg-gray-300 p-3 text-center text-xs font-bold hover:scale-105 transition-transform rounded-xl">
                  <p>{it.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
