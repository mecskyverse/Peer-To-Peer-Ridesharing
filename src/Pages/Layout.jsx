import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './NavBar'
import Footer from './Footer'
function Layout() {
    return (
        <>
            <div className="site-wrapper">
                <div>< Navbar /></div>
                <Outlet />
                <div className='footer'><Footer /></div>
            </div>
        </>
    )
}

export default Layout