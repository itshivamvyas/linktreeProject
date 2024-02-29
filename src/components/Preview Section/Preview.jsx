function Preview() {
  return (
    <div className="col-span-4 flex justify-center p-10">
      <div className="fixed">
        <div className="relative">
          <img src="./mockup.png" alt="" className="h-[calc(100vh-170px)]" />
          <div className="absolute inset-0 px-8 top-12 h-[calc(100vh-240px)] overflow-y-auto no-scrollbar">
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
                <div className="bg-white p-3 text-center text-xs font-bold hover:bg-indigo-200 transition">
                  Your LinkTree
                </div>
                <div className="bg-white p-3 text-center text-xs font-bold hover:bg-indigo-200 transition">
                  Shivam Kumar
                </div>
                <div className="bg-white p-3 text-center text-xs font-bold hover:bg-indigo-200 transition">
                  Your LinkTree
                </div>
                <div className="bg-white p-3 text-center text-xs font-bold hover:bg-indigo-200 transition">
                  Your LinkTree
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
