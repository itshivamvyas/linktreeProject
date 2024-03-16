import React from 'react'
import { IconHome } from "@tabler/icons-react";
import { Link } from "react-router-dom";

function Themes() {
  return (
    <div className='w-screen h-screen bg-white text-black flex flex-col gap-6 justify-center items-center'>
      <p className='text-5xl font-semibold'>Themes Fetures Is Coming Soon....</p>
      <p className='text-3xl font-semibold'>Back To Home</p>
      <Link to="/" >
      <div className='bg-slate-300 px-10 py-3 rounded-xl hover:bg-slate-400 active:translate-y-0.5'>
      <IconHome className='size-16'/>
        </div>
        </Link>
    </div>
  )
}

export default Themes
