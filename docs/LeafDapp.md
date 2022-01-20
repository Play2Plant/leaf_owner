## `LeafDapp`





### `onlyPlayer()`





### `onlyOwnerOrPlayer()`






### `constructor(address _leaf, address _nft)` (public)





### `mintLeaf()` (external)



mint million LEAF for owner

### `buyNft()` (external)



to play you have to buy the first NFT

### `stepToLeaf(uint32 _nbStep)` (external)



update player data related to the number of steps


### `stepToLeafWithoutTimestamp(uint32 _nbStep)` (external)





### `setNewLevel(address _player)` (internal)



the player levels up and receives a new NFT


### `nftSupply() → uint256` (internal)





### `isPlayer(address _player) → bool` (internal)



show if player or not

### `withdraw(uint256 _amount)` (external)



withdraw for only owner


### `getPlayer() → struct LeafDapp.Player` (external)





### `setPause(bool _state)` (external)



set pause/start the dapp

### `getPause() → bool` (external)



get pause/start the dapp

### `setTest(bool _state)` (external)



set on/off test mode

### `getTest() → bool` (external)



get on/off test mode

### `setCost(uint256 _newCost)` (external)



change the cost

### `whitelistPlayer(address _player)` (external)



add to whitelist


### `removeWhitelistPlayer(address _player)` (external)



remove frome whitelist


### `balancePlayer(address _player) → uint256` (external)





### `balance() → uint256` (external)





### `balanceNft() → uint256` (external)





### `balanceDappLeaf() → uint256` (external)





### `balanceDappEth() → uint256` (external)





### `getLeaf() → contract LeafToken` (external)





### `getNft() → contract LeafNft` (external)






### `NftBuyed(address _address, string uriIpfs)`



when new NFT was buyed

### `LeafTransfer(address _address, uint256 amountLeaf)`



when LEAF was transfered


### `Player`


uint32 oldNbStep


uint32 nbDaySuccess


uint32 level


uint256 totalNbStep


uint256 lastUpdateDate


string[] uriIpfs



