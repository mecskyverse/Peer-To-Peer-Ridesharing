import React from 'react'
import car from '../assets/ImpactsCar.png'
import pair from '../assets/ImpactsSocializing.png'
function Impacts() {
    return (
        <div className='text-white md:text-5xl text-xl relative top-80 text-center'>IMPACTS
            <div className='flex justify-around mt-10'>
                <div className='flex flex-col w-1/3'>
                    <img src={car} alt="Car Pollution" />
                    <p className='md:text-2xl text-sm mt-10 text-nav-white'>The average American drives 13,476 miles per year. That's 36 miles per day. If you drive a car that gets 20 miles per gallon, you'll burn 672 gallons of gas. That's 1,344 pounds of car</p>
                </div>
                <div className='flex flex-col w-1/3'>
                    <img src={pair} alt="Socializing Image" />
                    <p className='md:text-2xl text-sm mt-10 text-nav-white'>The average American drives 13,476 miles per year. That's 36 miles per day. If you drive a car that gets 20 miles per gallon, you'll burn 672 gallons of gas. That's 1,344 pounds of car</p>
                </div>

            </div>
        </div>
    )
}

export default Impacts