import React, { useEffect, useState, useRef, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { BigNumber, Contract, providers, utils } from "ethers";
import {

    CUSTOMER_CONTRACT_ABI,
    CUSTOMER_CONTRACT_ADDRESS,
} from "../constants.js";
import MyContext from '../components/MyContext.jsx';
function BookingRide() {

    const { getProviderOrSigner, walletConnected } = useContext(MyContext);
    const [rideArray, setRideArray] = useState([]);


    const location = useLocation()

    const [distance, setDistance] = useState(0)
    const [origin, setOrigin] = useState('')
    const [destination, setDestination] = useState('')
    console.log(origin)
    console.log(destination)

    useEffect(() => {
        availableRides();
        setDestination(location.state.destination)
        setOrigin(location.state.origin)
        let currdistance = location.state.distance;
        let roundedDistance = Math.round(parseFloat(currdistance)); // Round off the value
        let wholeNumber = Math.floor(roundedDistance);
        setDistance(wholeNumber)
    }, [distance, origin, destination])


    const addRider = async () => {
        try {
            // Get the provider from web3Modal, which in our case is MetaMask
            // No need for the Signer here, as we are only reading state from the blockchain
            const signer = await getProviderOrSigner(true);
            // Create an instance of token contract
            const customerContract = new Contract(
                CUSTOMER_CONTRACT_ADDRESS,
                CUSTOMER_CONTRACT_ABI,
                signer
            );

            // call the balanceOf from the token contract to get the number of tokens held by the user
            const tx = await customerContract.addRider(origin, destination, distance);
            // balance is already a big number, so we dont need to convert it before setting it
            await tx.wait();
        } catch (err) {
            console.error(err);
        }
    }
    const availableRides = async () => {
        try {
            const provider = await getProviderOrSigner();
            const customerContract = new Contract(
                CUSTOMER_CONTRACT_ADDRESS,
                CUSTOMER_CONTRACT_ABI,
                provider
            );
            const result = await customerContract.availableRides();

            const formattedResult = result.map((ride) => ({
                ...ride,
                distance: ride.distance.toString(),
                fare: ride.fare.toString(),
            }));
            setRideArray(formattedResult)
            console.log("result = " + formattedResult[1].destination)
        } catch (err) {
            console.error(err);
        }
    }
    const showArray = () => {
        if (rideArray.length === 0) {
            return (null)
        }
        else {
            return (
                <table className='text-white '>
                    <thead className='h-16'>
                        <tr >
                            <th className='w-80'>Address</th>
                            <th>Origin</th>
                            <th>Destination</th>
                            <th>Distance</th>
                            <th>Fare</th>
                        </tr>
                        <tr>

                        </tr>
                    </thead>
                    <tbody>
                        {rideArray.map((ride, index) => (
                            <React.Fragment key={index}>
                                <tr key={index} className='h-8'>
                                    <td className='text-center'>{ride.user}</td>
                                    <td className='text-center'>{ride.origin}</td>
                                    <td className='text-center'>{ride.destination}</td>
                                    <td className='text-center'>{ride.distance}</td>
                                    <td className='text-center'>{ride.fare} wei</td>
                                </tr>
                                <tr>
                                    <td colSpan="5">
                                        {/* Add a horizontal row here */}
                                        <hr />
                                    </td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table >
            )
        }


    }




    return (
        <main className='ride-book w-full'>
            <section className='flex flex-col gap-10 w-full' >
                <div className='text-white text-3xl self-center mt-10 '> Available Rides</div>
                {showArray()}
                <div className='flex flex-row gap-8 self-center'>
                    <button onClick={addRider} className='hover:bg-sky-400 h-10 bg-slate-50 p-2 w-auto' >Create Ride</button>
                    <button onClick={availableRides} className='hover:bg-sky-400 h-10 bg-slate-50    p-2 w-auto' >Available rides</button>
                </div>
            </section>
        </main>
    )
}

export default BookingRide