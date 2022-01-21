import Web3 from 'web3'
import NFTcontractBuild from './NFTcontract_abi.json'

var walletAddress = ''
var network= '';
let nftContract;

// testnet 43113
// mainnet 43114
// ganache 1337

// ganache 1
// testnet 0xa869
// mainnet 0xa86a

const id_network = 43113
const opcode_network = '0xa869'

export const init = async () => {
  console.log('init')
  if (typeof window.ethereum !== 'undefined') {
    window.ethereum.on('accountsChanged', function (accounts) {
      if (accounts[0]) {
        console.log('connected', accounts[0])
        walletAddress = accounts[0]
      } else {
        console.log('not connected')
      }
      window.location.reload();
    })

    window.ethereum.on('chainChanged', function (network) {
        if (network == opcode_network) {
            network = "avax"
        } else {
            network = "not-avax"
        }
      window.location.reload();

    })

    window.ethereum.on('disconnect', function () {
      console.log("disconnected")
      window.location.reload();
    })
  } else {
    console.log('no-metamask')
    return false
  }
}

export const connectWallet = async () => {
  await window.ethereum
    .request({
      method: 'eth_requestAccounts',
    })
    .then(async (accounts) => {
      if (accounts[0]) {
        let web3 = new Web3(window.ethereum)
        await web3.eth.getChainId().then(async (network) => {
          if (network == id_network) {
            network = "avax"
          } else {
            network = "not-avax"
          }
        })
          walletAddress = accounts[0]
      } else {
        return []
      }
    })
    .catch((err) => {
      console.log(err)
      return
    })
    return walletAddress

}

export const switchChain = async () => {
  await window.ethereum
    .request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: opcode_network }],
    })
    .catch((err) => {
      console.log(err)
      return
    })
    window.location.reload();

}

export const checkNetwork = async () => {
  // Check if browser is running Metamask
  let web3
  if (window.ethereum) {
    web3 = new Web3(window.ethereum)


    // Check if User is already connected by retrieving the accounts
    return await web3.eth.getChainId().then(async (network) => {
      if (network == id_network) {
        network = "avax"
      } else {
        network = "not-avax"
        console.log("network is : " + id_network);
      }
      return network 
    })
    
    
  }
}

export const checkConnection = async () => {
  // Check if browser is running Metamask
  let web3
  if (window.ethereum) {
    web3 = new Web3(window.ethereum)

    await web3.eth.getChainId().then(async (network) => {
      if (network == id_network ) {
        network = "avax"
      } else {
        network = "not-avax"
      }
    })
    
    // Check if User is already connected by retrieving the accounts
    await web3.eth.getAccounts().then(async (addr) => {
      if (addr[0]) {
        walletAddress = addr[0]
      } else {
          walletAddress = ""
      }
      
    })
    
    return walletAddress

  }
}

///////////   NFT Contract  ///////////
export const initContract = async () => {
  const web3 = new Web3(window.ethereum)

  nftContract = new web3.eth.Contract(
        NFTcontractBuild,
        "0x5AABc8481797bc3486C75B20108b01761Be2B5dA"
    )
}

export const canClaim = async () => {
  await initContract()
  return await nftContract.methods.canClaim().call()
}

export const toggleClaim = async (addr) => {
  await initContract()

  let operand = nftContract.methods.toggleClaimability()
  let params = { from: addr };

  return await operand.send(params)
  .on('error', function (error) {
      if (error.code === -32602) {
          params.type = "0x0";
          params.maxFeePerGas = null;
          params.maxPriorityFeePerGas= null;
          operand.send(params).on("error", function() {
            console.log('error', error)
          }).then( async function(){
            const result = await canClaim()
            return result
          })
      }else {
        console.log('error', error)
      }
  }).then( async function(){
      const result = await canClaim()
      return result
  }) 

}

export const request_mintNft = async (counter, price) => {
  await initContract()
  const web3 = new Web3(window.ethereum)

    let operand = nftContract.methods.claim(counter)
    let params = { from: walletAddress, value: web3.utils.toWei((price * counter).toString(), 'ether')};

    await operand.send(params)
    .on('error', function (error) {
        if (error.code === -32602) {
            params.type = "0x0";
            params.maxFeePerGas = null;
            params.maxPriorityFeePerGas= null;
            operand.send(params).on("error", function() {})
        }
        
    }).then(function(){
      return false
    }) 
    
}

export const withdraw = async () => {
  await initContract()
  // mettre spinner dans ui avec True en param

  let operand = nftContract.methods.withdraw()
  let params = { from: walletAddress };

  return await operand.send(params)
  .on('error', function (error) {
      if (error.code === -32602) {
          params.type = "0x0";
          params.maxFeePerGas = null;
          params.maxPriorityFeePerGas= null;
          operand.send(params).on("error", function() {
              return false
          }).then( function(){
            return false
          })
      }else {
          return false
      }
  }).then(function(){
    return false
  }) 
  
}

export const withdrawBalance = async () => {
  await initContract();
  const web3 = new Web3(window.ethereum);
  const result = await web3.eth.getBalance(process.env.VUE_APP_CONTRACT_ADR);

  return web3.utils.fromWei(result, 'ether')
}

export const request_totalSupply = async () => {
  await initContract()
  return nftContract.methods.totalSupply().call()
}

export const request_nftLimit = async () => {
  await initContract()
  return nftContract.methods.MAX_MINTABLE().call()
}

export const request_nftPrice = async () => {
  await initContract()
  const web3 = new Web3(window.ethereum)
  const price = await nftContract.methods.NFT_PRICE().call()

  return web3.utils.fromWei(`${price}`, 'ether')
}

export const getTokensByAddress = async (address) => {
  await initContract()
  const array = await nftContract.methods.tokensByAddress(address).call()
    return array
}

export const getTokenURI = async (param) => {
  await initContract()
  const response = await nftContract.methods.tokenURI(param).call()

  return response
}





