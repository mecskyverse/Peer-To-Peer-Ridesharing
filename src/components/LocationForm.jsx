import React from 'react'

function LocationForm() {
    return (
        <div className='w-1/8 h-2/5  flex-auto md:ml-32 md:mt-52 mt-44 md:self-start self-center md:w-1/4 md:h-3/6 absolute bg-gradient-to-b from-white to-black rounded-3xl p-5'>
            <form className='flex flex-col gap-10 pt-5' action="">
                {/* //input field for location */}
                <input type="text" className='w-full h-14 bg-white rounded-2xl p-2' placeholder='Enter Source' />
                {/* //input field for destination */}

                <input type="text" className='w-full h-14 bg-white rounded-2xl p-2' placeholder='Enter Destination' />
                {/* //button to submit */}
                <button type='submit' className='w-1/2  h-12 self-center bg-black text-white rounded-2xl p-2'>Submit</button>


            </form>
        </div>
    )
}

export default LocationForm