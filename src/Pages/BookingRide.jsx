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


    const Ridearray = [

        {
            address: '0x5B38Da6a701c568545dCfcB03FcB875f56bkdC4', origin: 'Delhi, India',
            destination: 'Chandigarh, India', distance: '203.1 km'
        },
        {
            address: '0x7438Da6a701c568545dCfcB03FcB875f56beldC4', origin: 'Pune, Maharashtra, India',
            destination: 'Raipur, Chattisgarh India', distance: '451.6 km'
        },
        {
            address: '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4', origin: 'Indore, India',
            destination: 'Kota, India', distance: '195.4'
        },
        {
            address: '0xAF8E45a64eDbbc5f4556d6de8CF5566cD0109D45', origin: 'Kharar, Punjab, India',
            destination: 'Chandigarh, India', distance: '21.6 km'
        }
    ]

    const location = useLocation()

    const [distance, setDistance] = useState(0)
    const [origin, setOrigin] = useState('')
    const [destination, setDestination] = useState('')
    // console.log(location.state)
    console.log(distance)
    useEffect(() => {
        setDistance(location.state.distance)
        setOrigin(location.state.origin)
        let currdistance = location.state.distance;
        let roundedDistance = Math.round(parseFloat(currdistance)); // Round off the value
        let wholeNumber = Math.floor(roundedDistance);
        setDistance(wholeNumber)
    })


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
            console.log("result = " + formattedResult[0].user)
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
                                <tr key={index}>
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
            <section className='flex flex-col w-full' >
                <button onClick={addRider} className=' h-10 bg-slate-50' >Create Ride</button>
                <button onClick={availableRides} className=' h-10 bg-slate-50' >available rides</button>
                {showArray()}
            </section>
        </main>
    )
}

export default BookingRide