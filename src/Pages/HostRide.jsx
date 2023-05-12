import React from 'react'
import redSedan from '../assets/blackCarcrop.jpg'
import { useJsApiLoader, Autocomplete, } from '@react-google-maps/api'



function HostRide() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    })
    if (!isLoaded)
        return <div>Loading...</div>
    return (
        <div className='flex flex-col'>
            <img src={redSedan} alt="Red Car Cover" className='object-cover h-72' />
            <div className='h-60 rounded-lg relative shadow-md  md:w-1/2 w-11/12 bg-slate-800 self-center -top-10 text-center'>
                <div className='text-slate-50 text-3xl font-serif mt-4'>Host Ride</div>
                <form action="" className='flex flex-col'>
                    <div className='flex justify-center gap-5 mt-5'>

                        <Autocomplete className='w-5/12'>
                            <input type="text" className='relative rounded-sm bg-slate-50 border-2 border-slate-500 w-full h-12' placeholder='Enter Place of Start' />
                        </Autocomplete>

                        <Autocomplete className='w-5/12 '>
                            <input type="text" className='relative rounded-sm bg-slate-50 border-2 border-slate-500 w-full h-12' placeholder='Enter Place of End' />
                        </Autocomplete>
                    </div>
                    <div className='flex justify-center gap-5 mt-5'>
                        <input type="date" name="date" id="form-date" className='rounded-sm bg-slate-50 border-2 border-slate-500 w-5/12 h-12 text-slate-400' />

                        <input type='time' className='rounded-sm bg-slate-50 border-2 border-slate-4 w-5/12 h-12 text-slate-400' />
                    </div>
                    {/* //button to submit */}
                    <button type='submit' className='h-12 relative mt-10  self-center bg-yellow-300 text-black rounded-sm p-2 justify-self-center hover:bg-yellow-900'>Get Estimate</button>

                </form>
            </div >
        </div >
    )
}

export default HostRide