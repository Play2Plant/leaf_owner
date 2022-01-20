### LeafNft

\

**Functions**

------------------------------------------------------------------------

###### constructor

mint first 10 NFTs with NFT levels for owner

  Name            Type     Description
  --------------- -------- ------------------------
  \_name          string   name of token ERC721
  \_symbol        string   symbol of token ERC721
  \_initBaseURI   string   base URI of ipfs files

Returns:

No parameters

------------------------------------------------------------------------

###### approve

See {IERC721-approve}.

  Name      Type      Description
  --------- --------- -------------
  to        address   
  tokenId   uint256   

Returns:

No parameters

------------------------------------------------------------------------

###### balanceOf

See {IERC721-balanceOf}.

  Name    Type      Description
  ------- --------- -------------
  owner   address   

Returns:

  Name   Type      Description
  ------ --------- -------------
         uint256   

------------------------------------------------------------------------

###### firstMint

player receives his first NFT

  Name   Type      Description
  ------ --------- ------------------
  \_to   address   receiver address

Returns:

  Name   Type     Description
  ------ -------- -------------
         string   

------------------------------------------------------------------------

###### getApproved

See {IERC721-getApproved}.

  Name      Type      Description
  --------- --------- -------------
  tokenId   uint256   

Returns:

  Name   Type      Description
  ------ --------- -------------
         address   

------------------------------------------------------------------------

###### getIdsNftByAddress

for players the table can contain a maximum of 4 elements, for owner
more

  Name        Type      Description
  ----------- --------- ------------------
  \_address   address   a player address

Returns:

  Name   Type          Description
  ------ ------------- -------------
         uint256\[\]   

------------------------------------------------------------------------

###### getSupply

return parameter firstLevelSupply

No parameters

Returns:

  Name   Type      Description
  ------ --------- -------------
         uint256   

------------------------------------------------------------------------

###### isApprovedForAll

See {IERC721-isApprovedForAll}.

  Name       Type      Description
  ---------- --------- -------------
  owner      address   
  operator   address   

Returns:

  Name   Type   Description
  ------ ------ -------------
         bool   

------------------------------------------------------------------------

###### mintOwner

mint \_nbNft NFTs of each level for owner

  Name      Type      Description
  --------- --------- ------------------------------
  \_nbNft   uint256   number of mint of each level

Returns:

No parameters

------------------------------------------------------------------------

###### name

See {IERC721Metadata-name}.

No parameters

Returns:

  Name   Type     Description
  ------ -------- -------------
         string   

------------------------------------------------------------------------

###### nextMint

player receives his auther NFTs

  Name      Type      Description
  --------- --------- ---------------------------------------------
  \_to      address   receiver address
  \_level   uint256   new NFT level, can be 10000, 20000 or 30000

Returns:

  Name   Type     Description
  ------ -------- -------------
         string   

------------------------------------------------------------------------

###### owner

Returns the address of the current owner.

No parameters

Returns:

  Name   Type      Description
  ------ --------- -------------
         address   

------------------------------------------------------------------------

###### ownerOf

See {IERC721-ownerOf}.

  Name      Type      Description
  --------- --------- -------------
  tokenId   uint256   

Returns:

  Name   Type      Description
  ------ --------- -------------
         address   

------------------------------------------------------------------------

###### renounceOwnership

Leaves the contract without owner. It will not be possible to call
\`onlyOwner\` functions anymore. Can only be called by the current
owner. NOTE: Renouncing ownership will leave the contract without an
owner, thereby removing any functionality that is only available to the
owner.

No parameters

Returns:

No parameters

------------------------------------------------------------------------

###### safeTransferFrom

See {IERC721-safeTransferFrom}.

  Name      Type      Description
  --------- --------- -------------
  from      address   
  to        address   
  tokenId   uint256   

Returns:

No parameters

------------------------------------------------------------------------

###### safeTransferFrom

See {IERC721-safeTransferFrom}.

  Name      Type      Description
  --------- --------- -------------
  from      address   
  to        address   
  tokenId   uint256   
  \_data    bytes     

Returns:

No parameters

------------------------------------------------------------------------

###### setApprovalForAll

See {IERC721-setApprovalForAll}.

  Name       Type      Description
  ---------- --------- -------------
  operator   address   
  approved   bool      

Returns:

No parameters

------------------------------------------------------------------------

###### setBaseExtension

change base extension .json by \_newBaseExtension

  Name                 Type     Description
  -------------------- -------- --------------------
  \_newBaseExtension   string   new base extension

Returns:

No parameters

------------------------------------------------------------------------

###### setBaseURI

change base URL by \_newBaseURI

  Name           Type     Description
  -------------- -------- --------------
  \_newBaseURI   string   new base URI

Returns:

No parameters

------------------------------------------------------------------------

###### supportsInterface

See {IERC165-supportsInterface}.

  Name          Type     Description
  ------------- -------- -------------
  interfaceId   bytes4   

Returns:

  Name   Type   Description
  ------ ------ -------------
         bool   

------------------------------------------------------------------------

###### symbol

See {IERC721Metadata-symbol}.

No parameters

Returns:

  Name   Type     Description
  ------ -------- -------------
         string   

------------------------------------------------------------------------

###### tokenByIndex

See {IERC721Enumerable-tokenByIndex}.

  Name    Type      Description
  ------- --------- -------------
  index   uint256   

Returns:

  Name   Type      Description
  ------ --------- -------------
         uint256   

------------------------------------------------------------------------

###### tokenOfOwnerByIndex

See {IERC721Enumerable-tokenOfOwnerByIndex}.

  Name    Type      Description
  ------- --------- -------------
  owner   address   
  index   uint256   

Returns:

  Name   Type      Description
  ------ --------- -------------
         uint256   

------------------------------------------------------------------------

###### tokenURI

See {IERC721Metadata-tokenURI}.

  Name      Type      Description
  --------- --------- -------------
  tokenId   uint256   

Returns:

  Name   Type     Description
  ------ -------- -------------
         string   

------------------------------------------------------------------------

###### totalSupply

See {IERC721Enumerable-totalSupply}.

No parameters

Returns:

  Name   Type      Description
  ------ --------- -------------
         uint256   

------------------------------------------------------------------------

###### transferFrom

See {IERC721-transferFrom}.

  Name      Type      Description
  --------- --------- -------------
  from      address   
  to        address   
  tokenId   uint256   

Returns:

No parameters

------------------------------------------------------------------------

###### transferOwnership

Transfers ownership of the contract to a new account (\`newOwner\`). Can
only be called by the current owner.

  Name       Type      Description
  ---------- --------- -------------
  newOwner   address   

Returns:

No parameters
:::
