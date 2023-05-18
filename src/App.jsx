import React, { useState, useContext, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Pages/Layout'
import BookRide from './Pages/BookRide'
import HostRide from './Pages/HostRide'
import CreateVote from './Pages/CreateVote'
import BookingRide from './Pages/BookingRide'
import MyContext from './components/MyContext'
import { providers } from "ethers";
import Web3Modal from "web3modal";
function App() {

  const [walletConnected, setWalletConnected] = useState(false);
  const web3ModalRef = useRef();
  const getProviderOrSigner = async (needSigner = false) => {
    // Connect to Metamask
    // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    // If user is not connected to the Sepolia network, let them know and throw an error
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 11155111) {
      window.alert("Change the network to Sepolia");
      throw new Error("Change network to Sepolia");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  const connectWallet = async () => {
    try {
      // Get the provider from web3Modal, which in our case is MetaMask
      // When used for the first time, it prompts the user to connect their wallet
      console.log("connect Wallet clicked")
      await getProviderOrSigner();
      setWalletConnected(!walletConnected)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet

    // Assign the Web3Modal class to the reference object by setting it's `current` value
    // The `current` value is persisted throughout as long as this page is open
    if (!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: "sepolia",
        providerOptions: {},
        disableInjectedProvider: false,
      });
      connectWallet();
    }


  }, [walletConnected]);


  // const { isWeb3Enabled, chainId } = useMoralis()
  return (
    <MyContext.Provider value={{ getProviderOrSigner, walletConnected, setWalletConnected }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='bookRide' element={<BookRide />} />

            <Route path='bookingRide' element={<BookingRide />} />

            <Route path='hostRide' element={<HostRide />} />

            <Route path='createVote' element={<CreateVote />} />

          </Route>
        </Routes>
      </BrowserRouter >
    </MyContext.Provider>


  )
}

export default App
