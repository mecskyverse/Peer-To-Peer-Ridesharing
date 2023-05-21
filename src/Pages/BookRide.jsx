import React, { useState, useContext } from 'react'
import { useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer } from '@react-google-maps/api'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom';
const libraries = ['places']
function BookRide() {
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState(0)
    const [duration, setDuration] = useState('')
    const [origin, setOrigin] = useState('')
    const [destination, setDestination] = useState('')

    const originRef = React.useRef()
    const destinationRef = React.useRef()

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries: libraries,
    })
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();



    if (!isLoaded)
        return <div>Loading...</div>
    // function to calculate Route
    async function calculateRoute(data) {

        setOrigin(originRef.current.value)
        setDestination(destinationRef.current.value)
        data.origin = originRef.current.value
        data.destination = destinationRef.current.value
        console.log(data)
        console.log(originRef.current.value)
        if (originRef.current.value === '' && destinationRef.current.value === '') {
            return
        }
        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
            origin: originRef.current.value,
            destination: destinationRef.current.value,
            travelMode: google.maps.TravelMode.DRIVING
        })
        setDirectionsResponse(results)

        setDistance(Math.floor(results.routes[0].legs[0].distance.value / 1000))
        setDuration(results.routes[0].legs[0].duration.text)
    }
    const center = { lat: 30.7506, lng: 76.6401 }
    return (
        <div className='ride-book h-full w-full flex'>
            <div className='text-xl w-1/2 flex flex-col bookride-background self-center '>
                <form onSubmit={handleSubmit(calculateRoute)} className='flex flex-col gap-10 pt-5 ml-20 text-white' action="">

                    <div className='flex flex-row gap-20 self-center'>
                        {/* //input field for location */}
                        <Autocomplete>
                            <input
                                type="text"
                                className='w-48 h-14 bg-transparent border-2 border-sky-500 rounded-2xl p-2 placeholder-form-text '
                                placeholder='Pickup Location'
                                ref={originRef}
                            />
                        </Autocomplete>

                        {/* //input field for destination */}
                        <Autocomplete>
                            <input type="text"
                                className='w-48 h-14 bg-transparent border-2 border-sky-500 rounded-2xl p-2  placeholder-form-text ' placeholder='Enter Destination'
                                name='destination'
                                ref={destinationRef}


                            />
                        </Autocomplete>
                    </div>

                    <input type="date" name="date" id="form-date" className='w-48 h-14 text-form-text bg-transparent border-2 border-[#f15a16] rounded-2xl p-2 self-center' style={{ filter: 'invert(1)' }} {...register("date")} />
                    {/* //button to submit */}
                    {
                        !directionsResponse ? <button type='submit' className={`h-12 self-center bg-transparent text-yellow-300 rounded-2xl p-2 
                        justify-self-center border-2 border-sky-500`}>Get Estimate </button>

                            :
                            <button className={`h-12 self-center bg-transparent text-yellow-300 rounded-2xl p-2 justify-self-center border-2 border-sky-500`}>
                                <NavLink to='/bookingRide' state={{ origin: origin, destination: destination, distance: distance }}
                                >Book Ride
                                </NavLink>
                            </button>
                    }

                </form>
                {
                    directionsResponse && (
                        <div className='self-center mt-20 text-white flex flex-col w-1/2'>
                            <div>Distance = {distance} km</div>
                            <div>Duration= {duration}</div>
                            <div>Estimated Fare= {distance * 1000} wei</div>
                        </div>
                    )
                }
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
                >
                    {console.log(directionsResponse)}
                    {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
                    <Marker position={center} />
                </GoogleMap>
            </div>
        </div >
    )
}

export default BookRide