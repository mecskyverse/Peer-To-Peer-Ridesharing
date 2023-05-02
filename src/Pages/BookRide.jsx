import React from 'react'

function BookRide() {
    return (
        <div className='ride-book'>
            <div className='text-xl w-1/2 h-full bookride-background'>
                <form className='flex flex-col gap-10 pt-5 ml-10' action="">
                    <div className='flex- flex-row'>
                        {/* //input field for location */}
                        <input type="text" className='w-48 h-14 bg-transparent border-2 border-sky-500 rounded-2xl p-2' placeholder='Enter Pickup' />
                        {/* //input field for destination */}

                        <input type="text" className='w-48 h-14 bg-transparent border-2 border-sky-500 rounded-2xl p-2' placeholder='Enter Destination' />
                    </div>
                    {/* //input field for date
                    <input type="date" className='w-48 h-14  border-2 text-black border-[#f15a16] rounded-2xl p-2' style={{
                        filter: "invert(1)"
                    }} /> */}


                    <input type="date" name="date" id="form-date" className='text-black' placeholder='Enter Date' />
                    <input type="datetime" name="" id="" className='text-black bg-transparent' />
                    {/* //button to submit */}
                    <button type='submit' className=' h-12 self-center bg-black text-white rounded-2xl p-2'>Submit</button>


                </form>
            </div>
        </div>
    )
}

export default BookRide