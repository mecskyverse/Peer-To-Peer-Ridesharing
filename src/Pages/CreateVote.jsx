import React, { useState } from 'react'
import createVotebg from '../assets/createVote.jpg'
import { HiX } from 'react-icons/hi'
function CreateVote() {
    const [sidebar, setSidebar] = useState(false)
    function handleClick() {
        setSidebar(!sidebar)
        console.log(sidebar)
        console.log("clicked")
    }
    const showSideView = () => {
        if (sidebar) {
            // I have to Make a transition property later 
            console.log("sidebar activated")
            return (

                <div className={`flex flex-col content-center justify-center h-screen w-3/4 rounded-e-3xl text-white  fixed top-0 right-0 z-50 sidebar-background`}>
                    <HiX className='hover:text-gray-500 absolute top-10 left-5 w-10 h-7' onClick={handleClick} />
                    <h2 className='text-sky-200 font-serif text-4xl place-self-center'>List of Current Votings</h2>
                    <ul className='flex flex-col text-xl gap-10  mt-20 self-center ml-1/8 '>

                    </ul>
                </div>
            )
        }
        else return null
    }
    return (


        <>
            <img src={createVotebg} alt="" className='create-vote h-full w-full absolute -z-0' />
            {/* <div onClick={handleClick} className='create-vote absolute text-xl text-red-600 w-20 top-72 mt-2 left-40' >Click to see Current Votings</div> */}
            <div className='relative  w-full h-full flex flex-col items-center justify-center top-16'>
                <h1 className='font-serif text-[#1EFA22] text-3xl'>Create Vote For Fare</h1>
                <p className='mt-10 text-lg font-serif text-sky-200'>A community Driven Fare management system where you can<br />
                    choose the fare of your choice and vote for it. The fare with <br />
                    the most votes
                    will be the fare of the cab.
                </p>
                <p className='text-xl text-white mt-10'>Current Fare of Cab is /km</p>
            </div>
            <div className='absolute vote-list-button top-80 mt-3 left-28 ml-2'>
                <button onClick={handleClick} className='hover:text-gray-300 vote-list-button bg-[#0E101C] text-white rounded-lg px-4 py-2'>Current Votings</button>
            </div>
            {showSideView()}
        </>


    )
}

export default CreateVote