import React from 'react'
import communitySvg from '../assets/Blockchain-Community.svg'
function BlockchainFeature() {
    return (
        <div className='flex md:flex-row flex-col w-full justify-between '>
            <img className='w-5/12 ml-10 hidden md:block' src={communitySvg} alt="community" />
            <div className='md:w-1/3 w-full h-3/4 md:mt-10 mt-0 rounded-3xl md:rounded-s-3xl self-center bg-Blockchain-feature-background text-white '>
                <h1 className='text-3xl text-center mt-5'>Features</h1>
                <p className='p-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga pariatur fugit veniam saepe hic totam quia amet blanditiis ea quod enim voluptatum nemo eligendi aut fugiat, numquam animi? Architecto, distinctio! Aliquam ea asperiores, libero sit facere temporibus odit nulla aut! Ullam tenetur distinctio ipsa repellat pariatur! Beatae cum vero soluta.</p>
                <p className='p-5 pt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum pariatur est a totam alias aliquam explicabo assumenda dolor vitae odit iste, animi, iure recusandae nisi sit sunt optio labore quae laudantium beatae. Minus repudiandae cupiditate beatae, odio excepturi officiis, molestiae alias soluta voluptatem inventore in aliquam tenetur quasi nesciunt est?</p>
            </div>
        </div>
    )
}

export default BlockchainFeature