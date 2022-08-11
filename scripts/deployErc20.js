const {ether, upgrades } = require ("hardhat")

async function main() {
  console.log("Start deploying a contract ... ");
    // deploy ERC20 token 
    const Erc20 = await ethers.getContractFactory("MyToken2");
    const erc20 = await upgrades.deployProxy(Erc20, {
      initializer: "initialize"
    });
    // const erc20 = await Erc20.deploy();
    await erc20.deployed();
    console.log("ERC20 deployed on address: ", erc20.address);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
