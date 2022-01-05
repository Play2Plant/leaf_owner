const { BN, expectRevert } = require("@openzeppelin/test-helpers");
const { expect } = require("chai");

const ContractLEAF = artifacts.require("LEAF");

contract("LEAF", function (accounts) {
  const OWNER = accounts[0];
  const ADDRESS_1 = accounts[1];
  const TOTAL_SUPPLY = new BN(15000000000);
  const BURN_AMOUNT = new BN(5000000000);
  const BURN_REST = new BN(10000000000);

  context("Testing the contract LEAF", function () {
    before(async function () {
      LEAF = await ContractLEAF.new(TOTAL_SUPPLY, { from: OWNER });
    });

    it("... test the function mint", async () => {
      await LEAF.mint({ from: OWNER });
      const totalLeaf = await LEAF.totalLeaf.call({ from: OWNER });

      expect(totalLeaf).to.be.bignumber.equal(TOTAL_SUPPLY, "Must be equal");
      await expectRevert(LEAF.mint({ from: OWNER }), "LEAF: you can mint once");
      await expectRevert(
        LEAF.mint({ from: ADDRESS_1 }),
        "Ownable: caller is not the owner"
      );
    });

    it("... test the function burn", async () => {
      await LEAF.burn(BURN_AMOUNT, { from: OWNER });
      const ownerBalance = await LEAF.balanceOf.call(OWNER, { from: OWNER });

      expect(ownerBalance).to.be.bignumber.equal(BURN_REST, "Must be equal");
      await expectRevert(
        LEAF.burn(BURN_AMOUNT, { from: ADDRESS_1 }),
        "Ownable: caller is not the owner"
      );
    });
  });
});
