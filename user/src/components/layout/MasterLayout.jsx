import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function MasterLayout() {
  return (
    <>
     <Header></Header>
     <div className='max-w-5xl mx-auto px-2 lg:px-0 py-20'>
     <main>
        <Outlet></Outlet>
     </main>
     </div>
     <Footer></Footer>
    </>
  )
}

export default MasterLayout