import prependHttp from "prepend-http";
import { useAppContext } from "../App";


function PublicLinks() {
  const { linksData } = useAppContext();
  return (
    <div>
      <div className="bg-slate-200 min-w-screen min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col gap-1 justify-center items-center p-5">
            <img
                className="rounded-full max-w-28 max-h-28"
                src="./Shivam.jpg"
                alt=""
              />
              <h1 className="font-bold">@Itshivamvyas</h1>
              <h1>Software Developer</h1>
            </div>

            <div className="flex flex-col gap-3 cursor-pointer w-full p-4 max-w-3xl">
              {linksData.map((it) => (
                <a href={prependHttp(it.url)} key={it.title} className="bg-white p-5 text-center font-bold hover:scale-105 transition-transform rounded-lg shadow-inner shadow-blue-800/20">
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
