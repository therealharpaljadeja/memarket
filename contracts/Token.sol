// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    uint256 _totalSupply; 
    constructor (uint256 totalSupply) ERC20("MyToken", "MT") {
        _totalSupply = totalSupply;
        _mint(msg.sender, totalSupply);
    }
}