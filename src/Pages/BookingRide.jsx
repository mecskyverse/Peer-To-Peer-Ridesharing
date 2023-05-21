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
    const [sameRideArray, setSameRideArray] = useState([]);
    const [sharedRideArray, setSharedRideArray] = useState([]);
    const [toggleSameRideArray, setToggleSameRideArray] = useState(false);
    const [currentAddress, setCurrentAddress] = useState('');
    const location = useLocation()

    const [distance, setDistance] = useState(0)
    const [origin, setOrigin] = useState('')
    const [destination, setDestination] = useState('')
    // console.log(origin)
    // console.log(destination)

    useEffect(() => {
        async function getUserAddress() {
            const signer = await getProviderOrSigner(true);
            const address = await signer.getAddress();
            setCurrentAddress(address)

        }
        availableRides();
        setDestination(location.state.destination)
        setOrigin(location.state.origin)

        setDistance(location.state.distance)
        console.log("distance = " + distance)
        getUserAddress();


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

            // console.log("result = " + formattedResult[1].destination)
        } catch (err) {
            console.error(err);
        }
    }
    const showRidesSameLocation = async () => {
        // console.log("button clicked")
        try {

            const provider = await getProviderOrSigner();
            const cutstomerContract = new Contract(
                CUSTOMER_CONTRACT_ADDRESS,
                CUSTOMER_CONTRACT_ABI,
                provider
            )
            //calling the function to show the location which are having ride Location same as me
            const result = await cutstomerContract.showRidesSameLocation(origin, destination);
            const formattedResult = result.map((ride) => ({
                ...ride,
                distance: ride.distance.toString(),
                fare: ride.fare.toString(),
            }));
            setSameRideArray(formattedResult)
        } catch (err) { console.log(err) }

    }
    const getSharedRideArray = async () => {
        try {

            const provider = await getProviderOrSigner();
            const cutstomerContract = new Contract(
                CUSTOMER_CONTRACT_ADDRESS,
                CUSTOMER_CONTRACT_ABI,
                provider
            )
            //calling the function to show the location which are having ride Location same as me
            const result = await cutstomerContract.showSharedRide();
            console.log(result)
            setSharedRideArray(result)
        } catch (err) { console.log(err) }

    }

    const shareRideWithThis = async (address, origin, destination) => {
        try {
            const signer = await getProviderOrSigner(true);
            const cutstomerContract = new Contract(
                CUSTOMER_CONTRACT_ADDRESS,
                CUSTOMER_CONTRACT_ABI,
                signer
            )

            const tx = await cutstomerContract.shareBookRidefromlist(address, origin, destination);
            await tx.wait();

        } catch (error) {
            console.log(error)
        }
    }
    const showSharedRideArray = () => {
        if (sharedRideArray.length === 0) {
            return (null)
        }
        else {
            return (
                <>
                    <div className='text-white text-3xl self-center mt-10 '>Shared Rides</div>
                    {/* if (needSameRide) console.log("button clicked") */}
                    <table className='text-white '>
                        <thead className='h-16'>
                            <tr >
                                <th className='w-80'>Addresses</th>
                                <th>Origin</th>
                                <th>Destination</th>
                            </tr>
                            <tr>
                            </tr>
                        </thead>
                        <tbody>
                            {sharedRideArray.map((ride, index) => (
                                <React.Fragment key={index}>
                                    <tr key={index} className='h-8'>
                                        <td className='text-center'>
                                            {
                                                ride.s_riders.map((rider, index) => (
                                                    <div className='text-white'>{rider}</div>
                                                ))
                                            }
                                        </td>
                                        <td className='text-center'>{ride.origin}</td>
                                        <td className='text-center'>{ride.destination}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="3">
                                            {/* Add a horizontal row here */}
                                            <hr />
                                        </td>
                                    </tr>
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table >
                </>
            )
        }
    }

    const showArray = (needSameRide) => {
        if ((needSameRide ? sameRideArray : rideArray).length === 0) {
            return (null)
        }
        else {
            return (
                <>
                    <div className='text-white text-3xl self-center mt-10 '> {needSameRide ? 'Same Rides As Yours' : 'Available Rides'}</div>
                    {/* if (needSameRide) console.log("button clicked") */}
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
                            {(needSameRide ? sameRideArray : rideArray).map((ride, index) => (
                                <React.Fragment key={index}>
                                    <tr key={index} className='h-8'>
                                        <td className='text-center'>{ride.user}</td>
                                        <td className='text-center'>{ride.origin}</td>
                                        <td className='text-center'>{ride.destination}</td>
                                        <td className='text-center'>{ride.distance}</td>
                                        <td className='text-center'>{ride.fare} wei</td>
                                        {
                                            ride.user.toString() != currentAddress.toString() && needSameRide ? (
                                                <button
                                                    onClick={() => shareRideWithThis(ride.user, ride.origin, ride.destination)}
                                                    className="hover:bg-sky-400 text-red-600 border border-gray-400"
                                                >
                                                    share
                                                </button>) : null

                                        }
                                    </tr>
                                    <tr>
                                        <td colSpan="6">
                                            {/* Add a horizontal row here */}
                                            <hr />
                                        </td>
                                    </tr>
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table >
                </>
            )
        }
    }





    return (
        <main className='ride-book w-full h-increase'>
            <section className='flex flex-col gap-10 w-full' >

                {showArray(toggleSameRideArray)}
                {showSharedRideArray()}
                <div className='flex flex-row gap-8 self-center'>
                    <button onClick={addRider} className='hover:bg-sky-400 h-10 bg-slate-50 p-2 w-auto' >Create Ride</button>
                    <button onClick={() => {
                        setToggleSameRideArray(false)
                        availableRides()
                    }} className='hover:bg-sky-400 h-10 bg-slate-50    p-2 w-auto' >Available rides</button>
                    <button onClick={() => {
                        setToggleSameRideArray(true)
                        showRidesSameLocation()
                    }} className='hover:bg-sky-400 h-10 bg-slate-50    p-2 w-auto' >Same Rides</button>
                    <button onClick={getSharedRideArray} className='hover:bg-sky-400 h-10 bg-slate-50    p-2 w-auto' >Shared Rides</button>
                </div>
            </section>
        </main >
    )
}

export default BookingRide