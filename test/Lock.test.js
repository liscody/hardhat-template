const {hre, ethers} = require("hardhat");
const assert = require("assert");

before ('get factories', async function (){
  this.MyToken = await hre.ethers.getContractFactory('MyToken');

});

it ('deploy My token', async function () {
  const myToken = await hre.upgrades.deployProxy(this.MyToken);

  assert(await myToken.name() === 'MyToken')

  
})