import React from 'react'
import '../index.css'
import bgImage from '../assets/bgImagePipe.png'
import bgSpace from '../assets/bg-space.png'
import LocationForm from './LocationForm'
import BlockchainFeature from './BlockchainFeature'
import Impacts from './Impacts'
function Home() {

    return (
        <div className="bg-project-black flex flex-col h-screen home-screen">
            <LocationForm />
            <img src={bgImage} className=' w-full' alt="Bacground Image" />
            <BlockchainFeature />
            <Impacts />
            <img src={bgSpace} className=' w-full' alt="Bacground Image" />
        </div>
    )
}

export default Home