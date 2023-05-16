import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'

import Web3Modal from "web3modal";

const Connect = forwardRef(({ walletConnected, toggleWalletConnect }, ref) => {
    const web3ModalRef = useRef();
    const getProviderOrSigner = async (needSigner = false) => {
        // Connect to Metamask
        // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
        const provider = await web3ModalRef.current.connect();
        const web3Provider = new providers.Web3Provider(provider);

        // If user is not connected to the Goerli network, let them know and throw an error
        const { chainId } = await web3Provider.getNetwork();
        if (chainId !== 5) {
            window.alert("Change the network to Goerli");
            throw new Error("Change network to Goerli");
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
            toggleWalletConnect();
        } catch (err) {
            console.error(err);
        }
    };
    useImperativeHandle(ref, () => ({
        connectWallet
    }));

    useEffect(() => {
        // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet

        // Assign the Web3Modal class to the reference object by setting it's `current` value
        // The `current` value is persisted throughout as long as this page is open
        if (!walletConnected) {
            web3ModalRef.current = new Web3Modal({
                network: "goerli",
                providerOptions: {},
                disableInjectedProvider: false,
            });
            connectWallet();
        }


    }, [walletConnected]);
    return (
        <div className='text-nav-white'>Connect</div>
    )
});

export default Connect;