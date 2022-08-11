const { expect } = require ("chai");
const { ethers } = require ("hardhat");

const { constants } = require("@openzeppelin/test-helpers");
const { ZERO_ADDRESS } = constants;

describe("ERC20 contract", function () {
  let ERC20 = null;
  let erc20= null;
  let erc20Address = null;

  beforeEach(async function () {
    [owner, buyer, alice, auctionReferee, pol, tod, larry] = await ethers.getSigners();
    ERC20 = await ethers.getContractFactory("MyERC20Token");
    erc20 = await ERC20.deploy();
    await erc20.deployed();
    erc20Address = erc20.address;
  });

  describe("Mint", function () {
    it("Should be equal", async () => {
      await erc20.mint(erc20Address, 100000);
      await expect (await (erc20.totalSupply())).to.be.equal(100000);
    });  
  });
});
