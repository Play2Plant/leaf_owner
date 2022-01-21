import React, { useState, useEffect } from 'react'
import { Row, Col, Container, Card, Button } from 'react-bootstrap'
import tree from '../assets/img/tree.png'
import {
  request_mintNft,
  request_totalSupply,
  request_nftLimit,
  request_nftPrice,
  checkConnection,
  getTokenURI,
  getTokensByAddress,
  connectWallet,
  switchChain,
  checkNetwork
} from '../lib/web3'
import axios from 'axios'

const NFT = () => {
  const [totalSupply, setTotalSupply] = useState(0)
  const [limit, setLimit] = useState(0)
  const [price, setPrice] = useState(0)
  const [loading, setLoading] = useState(false)
  const [address, setAddress] = useState('')
  const [network, setnetwork] = useState('')

  const [list, setlist] = useState([])
  const [nftList, setnftList] = useState([])
  const [player, setPlayer] = useState([])

  useEffect(() => {
    getPrice()
    getLimit()
    getTotalSupply()
    getTokens()
    checkAddress()
    checkNetwork1()
  }, [])

  useEffect(() => {
    getTokens()
  }, [address])

  useEffect(() => {
    getMetadatas()
  }, [list])

  const getMetadatas = async () => {
    var ok = []

    for (let i=0; i < list.length; i++) {
        await axios.get(list[i], { responseType: 'json' }).then((response) => {
            ok.push(response.data)
          }).catch(() => {});
    }
    setnftList(ok)
  }

  const checkNetwork1 = async () => {
    const network = await checkNetwork()
    setnetwork(network)
   }
 
  const switchNetwork = async () => {
    await switchChain()
   }
 
   const storeAddress = async () => {
       const address = await connectWallet()
       setAddress(address)
   }

  const checkAddress = async () => {
    const address = await checkConnection()
    setAddress(address)
  }

  const getPrice = async () => {
    const price = await request_nftPrice()
    setPrice(price)
  }

  const getLimit = async () => {
    const limit = await request_nftLimit()
    setLimit(limit)
  }

  const getTotalSupply = async () => {
    const total = await request_totalSupply()
    setTotalSupply(total)
  }

  const mint = async () => {
    setLoading(true)
    const ok = await request_mintNft(1, price)
    console.log(ok)
    getTotalSupply()
    getTokens()
    setLoading(false)
  }

  const getTokens = async () => {
    var urls = []
    if (address && network === "avax") {
      const array = await getTokensByAddress(address)

      array.forEach(async (element) => {
        let response = await getTokenURI(element)
        var responseFormat = response.substr(7)
        urls.push('https://ipfs.io/ipfs/' + responseFormat)
        setlist(urls)
      })
    }
  }

    if (list.length > 0){
        let player = true;
    }
    else{
        let player = false;
    }
console.log(player);
console.log(address);
console.log(network);
console.log(nftList);

  return (
    <Container>

        {!address &&
          <div className='mintPage'>
            <div className='connect'>
              Vous devez vous connectez avec votre wallet AVAX
            </div>
            <div>
              <Button onClick={() => storeAddress()}>
                Connect
              </Button>
            </div>
          </div>
        }

        {address && network !== "avax" &&
          <div className='mintPage'>
            <p>
              Vous devez mint ce NFT sur le reseau AVAX
            </p>
            <Button onClick={() => switchNetwork()}>
              Switch Network
            </Button>
          </div>
        }
        
        {address && network === "avax" &&
          <div>
            <div className='mintPage'>
              <h1>Mint your first tree</h1>
              <div>{limit - totalSupply} / 10000 restant</div>
            </div>
            <Row className="marketPlaceTree">
              <Col
                xs={12}
                md={8}
                lg={8}
                className="d-flex justify-content-center nftLeaf"
                style={{ marginTop: '20px' }}
              >
                <Card>
                  <Card.Img variant="top" src={tree} />
                  <Card.Body>
                    <Card.Title>Tree NFT</Card.Title>
                    <Card.Text>
                      Ce LEAF TREE a déjà donné vie à 10 arbres dans le monde réel
                      et si tu fais 10 000 pas aujourd'hui, il te donnera 6 LEAFs.
                      Des LEAFs qui permettront de planter de nouveaux arbres. Alors
                      lève toi et marche!
                    </Card.Text>
                  </Card.Body>
                  <Button
                    disabled={loading}
                    variant="primary"
                    onClick={() => mint()}
                  >
                    Mint {price}{' '}
                  </Button>
                </Card>
              </Col>
              </Row>
          </div>
        }

        { player == true && (
          console.log('player true')
        )}

    </Container>
  )
}

export default NFT
