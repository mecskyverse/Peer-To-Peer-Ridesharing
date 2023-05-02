import React from 'react'
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api'

function BookRide() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    })
    const center = { lat: 30.7506, lng: 76.6401 }
    return (


        <div className='ride-book h-full w-full flex'>
            <div className='text-xl w-1/2 bookride-background self-center'>
                <form className='flex flex-col gap-10 pt-5 ml-20 text-white' action="">
                    <div className='flex flex-row justify-around'>
                        {/* //input field for location */}
                        <input type="text" className='w-48 h-14 bg-transparent border-2 border-sky-500 rounded-2xl p-2 placeholder-form-text ' placeholder='Enter Firstname' />

                        {/* //input field for destination */}
                        <input type="text" className='w-48 h-14 bg-transparent border-2 border-sky-500 rounded-2xl p-2  placeholder-form-text ' placeholder='Enter LastNam' />

                    </div>
                    <div className='flex flex-row justify-around'>
                        {/* //input field for location */}
                        <input type="text" className='w-48 h-14 bg-transparent border-2 border-sky-500 rounded-2xl p-2 placeholder-form-text ' placeholder='Pickup Location' />

                        {/* //input field for destination */}
                        <input type="text" className='w-48 h-14 bg-transparent border-2 border-sky-500 rounded-2xl p-2  placeholder-form-text ' placeholder='Enter Destination' />
                    </div>

                    <input type="date" name="date" id="form-date" className='w-48 h-14 text-form-text bg-transparent border-2 border-[#f15a16] rounded-2xl p-2 self-center' style={{ filter: 'invert(1)' }} />
                    {/* //button to submit */}
                    <button type='submit' className='h-12 self-center bg-transparent text-yellow-300 rounded-2xl p-2 justify-self-center border-2 border-sky-500'>Submit</button>


                </form>
            </div>
            {/* Google Map */}
            <div className='w-1/2 mr-10'>
                <GoogleMap
                    center={center}
                    zoom={15}
                    mapContainerStyle={{ width: '100%', height: '100%', borderRadius: '2rem' }}
                    options={{
                        streetViewControl: true,
                        zoomControl: false,
                        mapTypeControl: false,
                        fullscreenControl: false,
                    }}
                />
            </div>
        </div >
    )
}

export default BookRide