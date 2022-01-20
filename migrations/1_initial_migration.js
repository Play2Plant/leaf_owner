var LeafToken = artifacts.require("LeafToken");
var LeafNft = artifacts.require("LeafNft");
var LeafDapp = artifacts.require("LeafDapp");

module.exports = async function(deployer) {
  // const ipfsBaseURI = "ipfs://QmZTqFyd2rVLu9FW8brEo6HXcLLHgA47KyKaqwoRVmXLjq/";
  const ipfsBaseURI = "ipfs://QmPQPqDqh5iXEeaWWMqM1EuzDMfiXWXAnG75nB4BUwpyLM/";

  await deployer.deploy(LeafToken);
  await deployer.deploy(LeafNft, 
    "Leaf NFT",
    "LNFT",
    ipfsBaseURI);

  const leaf = await LeafToken.deployed();
  const nft = await LeafNft.deployed();

  // let leafOwner = await leaf.owner();
  // let nftOwner = await nft.owner();
  
  await deployer.deploy(LeafDapp, leaf.address, nft.address);
  const dapp = await LeafDapp.deployed();
  
  await leaf.transferOwnership(dapp.address);
  await nft.transferOwnership(dapp.address);

  await dapp.mintLeaf();

  // console.log(leaf.address);
  // console.log(nft.address);
  // console.log(dapp.address);
};
