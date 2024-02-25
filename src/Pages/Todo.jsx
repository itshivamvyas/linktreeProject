import React from 'react'

function Todo() {
  return (
    <div className="flex flex-col gap-5 bg-white text-black p-10 rounded-3xl">
            <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-3">
              <h1 className="font-bold">This Is Main Heading</h1>
              <img src="" alt="Edit Button" />
              </div>
              <div className="flex flex-row gap-3">
              <p className="font-semibold">This Is Link To Open A Website</p>
              <img src="" alt="Edit Button" />
              </div>
            </div>

            <div className="flex flex-row gap-3">
              <img className="text-center" src="" alt="Share Button" />
              <label class="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  id="toggle"
                  value=""
                  class="sr-only peer"
                />
                <span class="relative w-10 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border-2 after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></span>
              </label>
            </div>
            </div>

            <div className="flex flex-row justify-between w-full">
              <div className="flex gap-2">
                <img src="" alt="Logo1" />
                <img src="" alt="Logo2" />
                <img src="" alt="Logo3" />
                <img src="" alt="Logo4" />
                <img src="" alt="Logo5" />
              </div>

              <div>
                <img src="" alt="svg Icon delete" />
              </div>
            </div>
          </div>
  )
}

export default Todo
