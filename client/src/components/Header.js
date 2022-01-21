import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
//import { LinkContainer } from 'react-router-bootstrap';
import { init, connectWallet, checkConnection , switchChain , checkNetwork} from "../lib/web3";

const Header = () => {
  const [address, setAddress] = useState('');
  const [network, setnetwork] = useState('');

  useEffect(() => {
    init()
    checkAddress()
    checkNetwork1()
  },[]);

  const switchNetwork = async () => {
   await switchChain()
  }

  const checkNetwork1 = async () => {
    const network = await checkNetwork()
    setnetwork(network)
   }
   
  const checkAddress = async () => {
    const address = await checkConnection()
    setAddress(address)
  }

  const storeAddress = async () => {
      const address = await connectWallet()
      setAddress(address)
  }

  const disconnect = async () => {
      console.log("disconnect")
  }

  return (
    <Navbar bg="light" expand="lg">
      <ul><li>Game</li></ul>
        {address && network != "avax" &&
          <Button onClick={() => switchNetwork()}>
             Switch Network
           </Button>
        }

        {address && network === "avax" &&
          <Button onClick={() => disconnect()}>
             {address.substr(21)}{" ..."}
           </Button>
        }

        {!address &&
          <Button onClick={() => storeAddress()}>
             Connect
           </Button>
        }

    </Navbar>
  )
}

export default Header
