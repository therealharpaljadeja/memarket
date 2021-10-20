// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.4;


import "@openzeppelin/contracts/utils/Context.sol";
import "./NFT.sol";
import "./NFTMarket.sol";
import "./Token.sol";

contract Creator is Context { 
    string public username;
    string public name;
    string public bio;
    address public nftCollectionAddress;
    address public tokenAddress;

    address public marketplaceAddress;

    constructor(
        address _marketplaceAddress, 
        string memory _username, 
        string memory _name, 
        string memory _bio, 
        string memory _nftCollectionName, 
        string memory _nftCollectionSymbol, 
        string memory _tokenName, 
        string memory _tokenSymbol,
        uint256 _tokenSupply
    ) {
        marketplaceAddress = _marketplaceAddress;
        name = _name;
        username = _username;
        bio = _bio;
        
        NFT nftCollection = new NFT(_nftCollectionName, _nftCollectionSymbol);
        Token token = new Token(_tokenName, _tokenSymbol, _tokenSupply);
        
        nftCollectionAddress = address(nftCollection);
        tokenAddress = address(token);
    }
}