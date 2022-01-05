const { BN, expectRevert, expectEvent } = require("@openzeppelin/test-helpers");
const { expect } = require("chai");

const ContractLeafDapp = artifacts.require("LeafDapp");

contract("LeafDapp", function (accounts) {
  const OWNER = accounts[0];
  const ADDRESS_1 = accounts[1];

  const TOTAL_SUPPLY = new BN(15000000000);
  const LEAF3_AMOUNT = new BN(150000000000000); // 3 LEAF in Wei
  const LEAF_3 = new BN(300); // 3 LEAF

  const BN_0 = new BN(0);

  context("Testing the contract LeafDapp", function () {
    beforeEach(async function () {
      Leaf = await ContractLeafDapp.new(TOTAL_SUPPLY, { from: OWNER });
    });

    it("... test the function buyLeaf", async () => {
      let player1 = await Leaf.players.call(ADDRESS_1, { from: ADDRESS_1});

      await Leaf.buyLeaf({from: ADDRESS_1, value: LEAF3_AMOUNT});
      player1 = await Leaf.players.call(ADDRESS_1, { from: ADDRESS_1});
      const balance1 = await Leaf.balance.call({from: ADDRESS_1});

      expect(balance1).to.be.bignumber.equal(LEAF_3, "Must be equal");
    });

    it("... test the function stepToLeaf", async () => {
      const NB_STEP = new BN(13875);
      const BALANCE = new BN(1387);

      let player1 = await Leaf.players.call(ADDRESS_1, { from: ADDRESS_1});
      expect(player1.oldNbStep).to.be.bignumber.equal(BN_0);
      expect(player1.nbDaySuccess).to.be.bignumber.equal(BN_0);
      expect(player1.lastSync).to.be.bignumber.equal(BN_0);

      await Leaf.stepToLeaf(NB_STEP, {from: ADDRESS_1});
      player1 = await Leaf.players.call(ADDRESS_1, { from: ADDRESS_1});
      const balance1 = await Leaf.balance.call({from: ADDRESS_1});

      expect(player1.oldNbStep).to.be.bignumber.equal(NB_STEP);
      expect(player1.nbDaySuccess).to.be.bignumber.equal(new BN(1));
      expect(balance1).to.be.bignumber.equal(BALANCE, "Must be equal");
      await expectRevert(
        Leaf.stepToLeaf(NB_STEP, { from: ADDRESS_1 }),
        "LeafDApp : a day has not passed yet"
      );
    });


  });
});
