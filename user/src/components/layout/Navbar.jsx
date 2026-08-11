import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const navs = [
    {
      id: 1,
      label: 'Dashboard',
      path: '/'
    },
    {
      id: 2,
      label: 'User',
      path: '/user'
    },
    {
      id: 3,
      label: 'History',
      path: '/history'
    },
    {
      id: 4,
      label: 'Settings',
      path: '/setting'
    }
  ]

  return (
    <>
      <div className='flex-col md:flex-row gap-3 md:gap-7 flex'>
        {
          navs.map((nav) =>
            <NavLink key={nav.id} to={nav.path}>
              {
                ({ isActive }) => (
                  <div className={`px-5 md:px-0 py-1.5 rounded-md hover:bg-[#FFFFFF] hover:text-[#4863FD] md:hover:bg-transparent md:hover:underline md:underline-offset-2 md:hover:text-[#FFFFFF] transition-all duration-300 ease-in-out ${isActive ? 'bg-[#FFFFFF] text-[#4863FD] md:bg-transparent md:text-[#FFFFFF] md:underline md:underline-offset-3' : 'bg-transparent text-[#FFFFFF]'}`}>
                    {nav.label}
                  </div>
                )
              }
            </NavLink>
          )
        }
      </div>
    </>
  )
}

export default Navbar