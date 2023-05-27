import React from 'react'
import communitySvg from '../assets/Blockchain-Community.svg'
function BlockchainFeature() {
    return (
        <div className='flex md:flex-row flex-col w-full justify-between '>
            <img className='w-5/12 ml-10 hidden md:block' src={communitySvg} alt="community" />
            <div className='blockchain-feature md:w-1/3 w-full h-3/4 md:mt-10 mt-0 rounded-3xl md:rounded-s-3xl self-center bg-Blockchain-feature-background text-white '>
                {/* <h1 className='text-3xl text-center mt-5'>Features</h1> */}
                <p className='p-5 text-xl'>Peer-to-Peer Ridesharing is an attempt to solve the problem of centralized ridesharing platforms. RushGo helps you to be transparent yet secure as a driver or as a passenger. RushGo is built on the Ethereum Blockchain and secured by Smart Contracts. You can book your ride or share it with others. Not only that, but you can also create a vote for the fare price you want to set</p>
                <p className='p-5 pt-0 text-xl '>Currently, RushGo is under development, but you can easily use features like Book Ride. Simply connect your Metamask Wallet with RushGo, and you're good to go.<b> This project is part of my 'learn while doing' method, which I've been using to learn to code. I have created it to practice my coding skills and as part of my projects.</b></p>
            </div>
        </div>
    )
}

export default BlockchainFeature