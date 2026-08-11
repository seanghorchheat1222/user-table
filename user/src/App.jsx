import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MasterLayout from './components/layout/MasterLayout'
import User from './pages/User'
import Dashboard from './pages/Dashboard'
import History from './pages/History'
import Setting from './pages/Setting'
import UserDetail from './pages/UserDetail'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route element={<MasterLayout></MasterLayout>}>
             <Route path='/' element={<Dashboard></Dashboard>}></Route>
             <Route path='/user' element={<User></User>}></Route>
             <Route path='/userdetail/:id' element={<UserDetail></UserDetail>}></Route>
             <Route path='/history' element={<History></History>}></Route>
             <Route path='/setting' element={<Setting></Setting>}></Route>
           </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
