import React, { useEffect, useState } from "react";
// import SimpleStorageContract from "./contracts/SimpleStorage.json";
import LeafContract from "./contracts/LeafDapp.json";
import getWeb3 from "./getWeb3";

import "./App.css";

function App() {
  const [state, setState] = useState({ account: null, contract: null });
  const [balances, setBalances] = useState({ leaf: 0, eth: 0 });
  // const []

  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        // Get network provider and web3 instance.
        const web3 = await getWeb3();

        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();

        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = LeafContract.networks[networkId];
        const instance = new web3.eth.Contract(
          LeafContract.abi,
          deployedNetwork && deployedNetwork.address
        );

        setState({ account: accounts[0], contract: instance });

        const owner = await instance.methods.owner().call();

        // const balanceLeaf = await instance.methods.balanceDappLeaf().call();
        // const balanceEth = await instance.methods.balanceDappEth().call();
  
        // setBalances({ leaf: balanceLeaf, eth: balanceEth })

        setIsOwner(owner === accounts[0]);
      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`
        );
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if(state.contract) {
        const balanceLeaf = await state.contract.methods.balanceDappLeaf().call({from: state.account});
        const balanceEth = await state.contract.methods.balanceDappEth().call({from: state.account});

        setBalances({ leaf: balanceLeaf, eth: balanceEth })
      }
    })();
  }, [state.contract]);

  useEffect(() => {
    (async () => {
      window.ethereum.on("accountsChanged", async function () {
        window.location.reload(false);
      });
    })();
  }, []);

  return (
    <div className="App">
      <h1>OWNER : {state.account}</h1>
      <h2>Leaf disponible : {balances.leaf}</h2>
      <h2>Eth disponible : {balances.eth}</h2>
    </div>
  );
}

export default App;
