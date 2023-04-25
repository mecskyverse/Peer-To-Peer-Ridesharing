import React from 'react'
import '../index.css'
import bgImage from '../assets/bgImagePipe.png'
import bgSpace from '../assets/bg-space.png'
import LocationForm from './LocationForm'
import BlockchainFeature from './BlockchainFeature'
function Home() {
    const styles = {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
    }
    const styles2 = {
        backgroundImage: `url(${bgSpace})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        // width: '100%',
        // height: '100%'
        overflow: 'auto'

    }
    return (
        <>
            <div style={styles2} className="bg-project-black h-screen">
                {/* <LocationForm /> */}
                {/* <img src={bgImage} className=' w-full' alt="Bacground Image" /> */}
                {/* <BlockchainFeature /> */}
                {/* <img src={bgSpace} className=' w-full' alt="Bacground Image" /> */}
            </div>
            {/* <div style={styles} className='h-full w-full text-white'>helllo </div> */}
        </>
    )
}

export default Home