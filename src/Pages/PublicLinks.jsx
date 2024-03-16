import prependHttp from "prepend-http";
import { useAppContext } from "../App";
import { IconUserCircle } from "@tabler/icons-react";


function PublicLinks() {
  const { linksData, user } = useAppContext();
  return (
    <div>
      <div className="bg-slate-200 w-screen min-h-screen flex flex-col justify-center items-center">
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

            <div className="flex flex-col gap-3 cursor-pointer w-full p-4 max-w-3xl">
              {linksData.map((it) => (
                <a href={prependHttp(it.url)} target="_blank" key={it.title} className="bg-white p-5 text-center font-bold hover:scale-105 transition-transform rounded-xl shadow-inner shadow-blue-800/25">
                  {it.title}
                </a>
              ))}
              <br />
              <br />
            </div>
      </div>
    </div>
  );
}

export default PublicLinks;
