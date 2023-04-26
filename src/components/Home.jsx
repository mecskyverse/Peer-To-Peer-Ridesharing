import React from 'react'
import '../index.css'
import LocationForm from './LocationForm'
import BlockchainFeature from './BlockchainFeature'
function Home() {
    return (
        <>

            <div className='h-full w-full text-white bg-pipe'>
                <LocationForm />

            </div>
            <div className="h-screen">
                <BlockchainFeature />

            </div >
        </>
    )
}

export default Home