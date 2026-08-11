import React, { useState } from 'react'
import Navbar from './Navbar'

function Header() {
  const [menu, setMenu] = useState(false);

  const handleToggleMenu = () => {
    setMenu(!menu);
  }

  return (
    <>
      <div className='bg-[#4863FD] h-auto py-2 shadow-[0px_1px_10px_rgba(0,0,0,0.15)] fixed w-full top-0'>
        <div className='flex justify-between max-w-5xl px-2 lg:px-0 mx-auto h-full items-center'>
          <div className={`flex-col gap-1 ${menu ? 'bg-[#FFFFFF]' : 'bg-transparent'} px-2 py-2 flex md:hidden transition-all duration-300 ease-in-out rounded-md`} onClick={() => handleToggleMenu()}>
            <span className={`w-8 h-1  inline-block rounded-md ${menu ? 'bg-[#4863FD]' : 'bg-[#FFFFFF]'} transition-all duration-300 ease-in-out`}></span>
            <span className={`w-8 h-1  inline-block rounded-md ${menu ? 'bg-[#4863FD]' : 'bg-[#FFFFFF]'} transition-all duration-300 ease-in-out`}></span>
            <span className={`w-8 h-1  inline-block rounded-md ${menu ? 'bg-[#4863FD]' : 'bg-[#FFFFFF]'} transition-all duration-300 ease-in-out`}></span>
          </div>
          <div className='hidden md:block'>
            <Navbar></Navbar>
          </div>
          <div className='flex items-center gap-2'>
            <div className='bg-[#D9D9D9] h-13 w-13 rounded-full'>
            </div>
            <div className='text-[#FFFFFF] font-semibold hidden md:block
            '>Seanghor Chh</div>
          </div>
        </div>
      </div>
      <div className={`w-50 fixed top-17 bg-[#4863FD] shadow-[1px_0px_10px_rgba(0,0,0,0.15)] h-full px-2 ${menu ? 'left-0' : '-left-100'} transition-all duration-300 ease-in-out pt-2 z-10`}>
        <Navbar></Navbar>
      </div>
    </>
  )
}

export default Header