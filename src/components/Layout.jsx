import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './NavBar'
function Layout() {
    return (
        <div className="site-wrapper">
            < Navbar />
            <Outlet />
            {/* <Footer /> */}
        </div>
    )
}

export default Layout