import React from 'react'
import communitySvg from '../assets/Blockchain-Community.svg'
function BlockchainFeature() {
    return (
        <div className='relative flex md:flex-row flex-col w-full justify-between '>
            <img className='w-1/2 hidden md:block' src={communitySvg} alt="community" />
            <div className='relative w-1/3 h-3/4 md:top-0 top-full md:mt-0 rounded-3xl md:rounded-s-3xl self-center bg-Blockchain-feature-background text-white mt-28 '>
                <h1 className='text-3xl text-center mt-5'>Features</h1>
            </div>
        </div>
    )
}

export default BlockchainFeature