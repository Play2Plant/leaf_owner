
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="utf-8" />
  <meta
      name="description"
      content="Web site created with EthDoc"
  />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  </head>
  <body>
      
    <style>
        #ethdoc-viewer{
            font-size: 0.8em;
            padding: 1em;
        }
        #ethdoc-viewer .lead{
            font-size: 1em;
        }
        #ethdoc-viewer table {
            width: 50%;
        }
        #ethdoc-viewer hr {
            margin: 0;
            margin-bottom: 0.5rem;
        }
        #ethdoc-viewer p{
            margin-bottom: 0.5rem;
        }
    </style>

    <div id="ethdoc-viewer">
    
        
    <h3>LeafNft </h3>

    

    

    <br />
    <p><strong>Functions</strong></p>


        
          <hr>
            <h6>constructor</h6>

            <p>mint first 10 NFTs with NFT levels for owner</p>


            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td>_name</td>
        <td>string</td>
        <td>name of token ERC721</td>
        </tr><tr>
        <td>_symbol</td>
        <td>string</td>
        <td>symbol of token ERC721</td>
        </tr><tr>
        <td>_initBaseURI</td>
        <td>string</td>
        <td>base URI of ipfs files</td>
        </tr>
              </tbody>
      </table>
                  
            <p>Returns:</p>
           
            <p>No parameters</p>
            

          <hr>
            <h6>approve</h6>

            <p>See {IERC721-approve}.</p>

            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td>to</td>
        <td>address</td>
        <td></td>
        </tr><tr>
        <td>tokenId</td>
        <td>uint256</td>
        <td></td>
        </tr>
              </tbody>
      </table>
                  
            <p>Returns:</p>
           
            <p>No parameters</p>
            

          <hr>
            <h6>balanceOf</h6>

            <p>See {IERC721-balanceOf}.</p>

            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td>owner</td>
        <td>address</td>
        <td></td>
        </tr>
              </tbody>
      </table>
                  
            <p>Returns:</p>
           
            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td></td>
        <td>uint256</td>
        <td></td>
        </tr>
              </tbody>
      </table>
            

          <hr>
            <h6>firstMint</h6>

            <p>player receives his first NFT</p>


            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td>_to</td>
        <td>address</td>
        <td>receiver address</td>
        </tr>
              </tbody>
      </table>
                  
            <p>Returns:</p>
           
            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td></td>
        <td>string</td>
        <td></td>
        </tr>
              </tbody>
      </table>
            

          <hr>
            <h6>getApproved</h6>

            <p>See {IERC721-getApproved}.</p>

            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td>tokenId</td>
        <td>uint256</td>
        <td></td>
        </tr>
              </tbody>
      </table>
                  
            <p>Returns:</p>
           
            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td></td>
        <td>address</td>
        <td></td>
        </tr>
              </tbody>
      </table>
            

          <hr>
            <h6>getIdsNftByAddress</h6>

            <p>for players the table can contain a maximum of 4 elements, for owner more</p>


            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td>_address</td>
        <td>address</td>
        <td>a player address</td>
        </tr>
              </tbody>
      </table>
                  
            <p>Returns:</p>
           
            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td></td>
        <td>uint256[]</td>
        <td></td>
        </tr>
              </tbody>
      </table>
            

          <hr>
            <h6>getSupply</h6>

            <p>return parameter firstLevelSupply</p>


            <p>No parameters</p>
                  
            <p>Returns:</p>
           
            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td></td>
        <td>uint256</td>
        <td></td>
        </tr>
              </tbody>
      </table>
            

          <hr>
            <h6>isApprovedForAll</h6>

            <p>See {IERC721-isApprovedForAll}.</p>

            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td>owner</td>
        <td>address</td>
        <td></td>
        </tr><tr>
        <td>operator</td>
        <td>address</td>
        <td></td>
        </tr>
              </tbody>
      </table>
                  
            <p>Returns:</p>
           
            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td></td>
        <td>bool</td>
        <td></td>
        </tr>
              </tbody>
      </table>
            

          <hr>
            <h6>mintOwner</h6>

            <p>mint _nbNft NFTs of each level for owner</p>

            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td>_nbNft</td>
        <td>uint256</td>
        <td>number of mint of each level</td>
        </tr>
              </tbody>
      </table>
                  
            <p>Returns:</p>
           
            <p>No parameters</p>
            

          <hr>
            <h6>name</h6>

            <p>See {IERC721Metadata-name}.</p>

            <p>No parameters</p>
                  
            <p>Returns:</p>
           
            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td></td>
        <td>string</td>
        <td></td>
        </tr>
              </tbody>
      </table>
            

          <hr>
            <h6>nextMint</h6>

            <p>player receives his auther NFTs</p>


            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td>_to</td>
        <td>address</td>
        <td>receiver address</td>
        </tr><tr>
        <td>_level</td>
        <td>uint256</td>
        <td>new NFT level, can be 10000, 20000 or 30000</td>
        </tr>
              </tbody>
      </table>
                  
            <p>Returns:</p>
           
            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td></td>
        <td>string</td>
        <td></td>
        </tr>
              </tbody>
      </table>
            

          <hr>
            <h6>owner</h6>

            <p>Returns the address of the current owner.</p>

            <p>No parameters</p>
                  
            <p>Returns:</p>
           
            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td></td>
        <td>address</td>
        <td></td>
        </tr>
              </tbody>
      </table>
            

          <hr>
            <h6>ownerOf</h6>

            <p>See {IERC721-ownerOf}.</p>

            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td>tokenId</td>
        <td>uint256</td>
        <td></td>
        </tr>
              </tbody>
      </table>
                  
            <p>Returns:</p>
           
            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td></td>
        <td>address</td>
        <td></td>
        </tr>
              </tbody>
      </table>
            

          <hr>
            <h6>renounceOwnership</h6>

            <p>Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.</p>

            <p>No parameters</p>
                  
            <p>Returns:</p>
           
            <p>No parameters</p>
            

          <hr>
            <h6>safeTransferFrom</h6>

            <p>See {IERC721-safeTransferFrom}.</p>

            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td>from</td>
        <td>address</td>
        <td></td>
        </tr><tr>
        <td>to</td>
        <td>address</td>
        <td></td>
        </tr><tr>
        <td>tokenId</td>
        <td>uint256</td>
        <td></td>
        </tr>
              </tbody>
      </table>
                  
            <p>Returns:</p>
           
            <p>No parameters</p>
            

          <hr>
            <h6>safeTransferFrom</h6>

            <p>See {IERC721-safeTransferFrom}.</p>

            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td>from</td>
        <td>address</td>
        <td></td>
        </tr><tr>
        <td>to</td>
        <td>address</td>
        <td></td>
        </tr><tr>
        <td>tokenId</td>
        <td>uint256</td>
        <td></td>
        </tr><tr>
        <td>_data</td>
        <td>bytes</td>
        <td></td>
        </tr>
              </tbody>
      </table>
                  
            <p>Returns:</p>
           
            <p>No parameters</p>
            

          <hr>
            <h6>setApprovalForAll</h6>

            <p>See {IERC721-setApprovalForAll}.</p>

            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td>operator</td>
        <td>address</td>
        <td></td>
        </tr><tr>
        <td>approved</td>
        <td>bool</td>
        <td></td>
        </tr>
              </tbody>
      </table>
                  
            <p>Returns:</p>
           
            <p>No parameters</p>
            

          <hr>
            <h6>setBaseExtension</h6>

            <p>change base extension .json by _newBaseExtension</p>

            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td>_newBaseExtension</td>
        <td>string</td>
        <td>new base extension</td>
        </tr>
              </tbody>
      </table>
                  
            <p>Returns:</p>
           
            <p>No parameters</p>
            

          <hr>
            <h6>setBaseURI</h6>

            <p>change base URL by _newBaseURI</p>

            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td>_newBaseURI</td>
        <td>string</td>
        <td>new base URI</td>
        </tr>
              </tbody>
      </table>
                  
            <p>Returns:</p>
           
            <p>No parameters</p>
            

          <hr>
            <h6>supportsInterface</h6>

            <p>See {IERC165-supportsInterface}.</p>

            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td>interfaceId</td>
        <td>bytes4</td>
        <td></td>
        </tr>
              </tbody>
      </table>
                  
            <p>Returns:</p>
           
            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td></td>
        <td>bool</td>
        <td></td>
        </tr>
              </tbody>
      </table>
            

          <hr>
            <h6>symbol</h6>

            <p>See {IERC721Metadata-symbol}.</p>

            <p>No parameters</p>
                  
            <p>Returns:</p>
           
            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td></td>
        <td>string</td>
        <td></td>
        </tr>
              </tbody>
      </table>
            

          <hr>
            <h6>tokenByIndex</h6>

            <p>See {IERC721Enumerable-tokenByIndex}.</p>

            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td>index</td>
        <td>uint256</td>
        <td></td>
        </tr>
              </tbody>
      </table>
                  
            <p>Returns:</p>
           
            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td></td>
        <td>uint256</td>
        <td></td>
        </tr>
              </tbody>
      </table>
            

          <hr>
            <h6>tokenOfOwnerByIndex</h6>

            <p>See {IERC721Enumerable-tokenOfOwnerByIndex}.</p>

            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td>owner</td>
        <td>address</td>
        <td></td>
        </tr><tr>
        <td>index</td>
        <td>uint256</td>
        <td></td>
        </tr>
              </tbody>
      </table>
                  
            <p>Returns:</p>
           
            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td></td>
        <td>uint256</td>
        <td></td>
        </tr>
              </tbody>
      </table>
            

          <hr>
            <h6>tokenURI</h6>

            <p>See {IERC721Metadata-tokenURI}.</p>

            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td>tokenId</td>
        <td>uint256</td>
        <td></td>
        </tr>
              </tbody>
      </table>
                  
            <p>Returns:</p>
           
            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td></td>
        <td>string</td>
        <td></td>
        </tr>
              </tbody>
      </table>
            

          <hr>
            <h6>totalSupply</h6>

            <p>See {IERC721Enumerable-totalSupply}.</p>

            <p>No parameters</p>
                  
            <p>Returns:</p>
           
            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td></td>
        <td>uint256</td>
        <td></td>
        </tr>
              </tbody>
      </table>
            

          <hr>
            <h6>transferFrom</h6>

            <p>See {IERC721-transferFrom}.</p>

            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td>from</td>
        <td>address</td>
        <td></td>
        </tr><tr>
        <td>to</td>
        <td>address</td>
        <td></td>
        </tr><tr>
        <td>tokenId</td>
        <td>uint256</td>
        <td></td>
        </tr>
              </tbody>
      </table>
                  
            <p>Returns:</p>
           
            <p>No parameters</p>
            

          <hr>
            <h6>transferOwnership</h6>

            <p>Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.</p>

            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td>newOwner</td>
        <td>address</td>
        <td></td>
        </tr>
              </tbody>
      </table>
                  
            <p>Returns:</p>
           
            <p>No parameters</p>
            
    
    </div>

  </body>
  </html>

