import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Layout() {
  return (
    <>
        <div><Navbar/></div>
        <div><Outlet/></div>
        <div><Footer/></div>
    </>
  )
}

export default Layout