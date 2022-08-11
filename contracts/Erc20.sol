// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract MyToken2 is Initializable, ERC20Upgradeable{

    function initialize() public initializer {
        __ERC20_init("MyToken2", "MTK2");
        _mint(msg.sender, 1000000000*10** decimals());
    }
}