var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var LeafDapp = artifacts.require("./LeafDapp.sol");
// var SimpleStorage = artifacts.require("./SimpleStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  // 10000000000 => 100 000 000 Leafs
  deployer.deploy(LeafDapp, 10000000000);
};
