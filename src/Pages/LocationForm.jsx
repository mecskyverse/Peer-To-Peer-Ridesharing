import React from 'react'

function LocationForm() {
    return (
        <div className='flex w-full h-full md:justify-start justify-center'>
            <div className='self-center md:ml-32 ml-0 md:w-1/4 w-1/8 h-2/4 bg-gradient-to-b from-white to-black rounded-3xl p-5'>
                <form className='flex flex-col gap-10 pt-5' action="">
                    {/* //input field for location */}
                    <input type="text" className='w-full h-14 bg-white rounded-2xl p-2' placeholder='Enter Source' />
                    {/* //input field for destination */}

                    <input type="text" className='w-full h-14 bg-white rounded-2xl p-2' placeholder='Enter Destination' />
                    {/* //button to submit */}
                    <button type='submit' className='w-1/2  h-12 self-center bg-black text-white rounded-2xl p-2'>Submit</button>


                </form>
            </div>
        </div>
    )
}

export default LocationForm
// w-44 h-2/5  md:ml-32 md:mt-52 mt-44 md:self-start self-center md:w-1/4 md:h-3/6 