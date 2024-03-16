import { useAppContext } from "../../App";
import prependHttp from "prepend-http";

function Preview() {
  const { linksData, user } = useAppContext();

  return (
    <div className="col-span-4 flex justify-center p-10">
      <div className="fixed select-none">
        <div className="bg-slate-200 rounded-3xl py-1 border-8 border-black aspect-[9_/_19] h-[calc(100vh-150px)]">
          <div className="overflow-y-auto no-scrollbar h-full px-4">
          <div className="text-justify ">
            <div className="flex flex-col gap-1 justify-center items-center p-5">
            {user.picture ? (
                <img
                  src={user.picture}
                  alt="User"
                  className="rounded-full"
                />
              ) : (
                <IconUserCircle
                  className="rounded-full"
                />
              )}
              <h1 className="font-bold">@Itshivamvyas</h1>
              <h1>Software Developer</h1>
            </div>

            <div className="flex flex-col gap-3 cursor-pointer">
            {linksData.map((it) => (
                <a href={prependHttp(it.url)} target="_blank" key={it.title} className="bg-white p-3 text-center font-bold hover:scale-105 transition-transform rounded-xl shadow-inner shadow-blue-800/25">
                  {it.title}
                </a>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
