import React, { useState, useEffect, useRef, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import MyContext from '../components/MyContext';
function NavBar() {
    const { walletConnected, setWalletConnected } = useContext(MyContext);
    const [sidebar, setSidebar] = useState(false);
    const [isMobile, setIsMobile] = useState(false)
    const [scrolling, setScrolling] = useState("")
    const [showCross, setShowCross] = useState(false)
    const web3ModalRef = useRef();


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768)
                setIsMobile(true);
            else
                setIsMobile(false);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    useEffect(() => {
        const onScroll = () => {
            if (window.pageYOffset > 100)
                setScrolling("scrolling")
            else
                setScrolling("")
        }

        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [scrolling]);

    function handleClick() {
        setSidebar(!sidebar)
        setShowCross(!showCross)
    }
    const handleConnectClick = () => {
        try {
            if (typeof window.ethereum == 'undefined') {
                window.alert("Install Metask to smoothly use this app");
                window.alert("Or change Network to Sepolia testNet")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const showSidebar = () => {

        if (isMobile && !showCross) {
            return (
                <div className='w-50'>
                    <HiMenuAlt4 onClick={handleClick} className='z-50 text-logo-white bg-gray-900 w-7  rounded h-7' />
                </div>
            )
        }
        if (isMobile && showCross) {
            return (
                <div className='w-50'>
                    <HiX onClick={handleClick} className='z-50 text-logo-white bg-gray-900 w-7  rounded h-7' />
                </div>
            )
        }

        else return null
    }

    const showSideView = () => {
        if (isMobile && sidebar) {
            // I have to Make a transition property later 
            return (
                <div className={`flex flex-col h-screen w-1/2 rounded-e-3xl text-white  fixed top-0 left-0 z-50 bg-black`}>
                    <ul className='flex flex-col text-xl gap-10  mt-20 self-center ml-1/8 '>
                        <li className="hover:animate-bounce ">Home</li>
                        <li className="hover:animate-bounce ">Host Ride</li>
                        <li className="hover:animate-bounce ">Book Ride</li>
                        <li className="hover:animate-bounce ">Create Vote</li>
                        <li className="hover:animate-bounce ">Connect Wallet</li>
                    </ul>
                </div>
            )
        }
        else return null
    }

    return (
        <div className='h-20'>
            <div className={`${scrolling} z-40 fixed top-0 left-0 w-full h-20 `} >
                <nav className={`nav flex flex-row justify-between items-center mx-20 mt-5 fixed top-0 left-0 right-0 `} >
                    <Link to="/"> <div className="nav-logo text-4xl text-logo-white hover:scale-125 ">RushGo</div> </Link>
                    <div className='items md:flex flex-row items-center justify-between hidden w-6/12'>

                        <NavLink className='text-nav-white text-sm hover:scale-150 '
                            to='/bookride'>Book Ride</NavLink>

                        <NavLink className='text-nav-white text-sm hover:scale-150 ' to="/hostride">Host Ride</NavLink>
                        <NavLink className='text-nav-white text-sm hover:scale-150 ' to="/createvote">Create Vote</NavLink>
                        <button className='text-nav-white text-sm hover:scale-150 onClick={handleConnectClick}'>{walletConnected ? 'Connected' : 'Connect'}</button>

                    </div >
                    {showSidebar()}
                </ nav >
            </ div >
            {showSideView()}
        </div >

    )
}

export default NavBar