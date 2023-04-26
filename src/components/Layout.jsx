import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './NavBar'
import Footer from './Footer'
function Layout() {
    return (
        <div className="site-wrapper">
            < Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout