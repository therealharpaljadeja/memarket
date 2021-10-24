// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Context.sol";
import "./Creator.sol";

contract Creators is Context {

    address public marketplaceAddress;

    mapping(string => address) usernameToCreatorMapping;
    mapping(address => address) addressToCreatorMapping;
    mapping(string => address) usernameToAddressMapping;

    event UserRegistered(string indexed username, string indexed nftCollectionSymbol, string indexed tokenSymbol);

    constructor(address _marketplaceAddress) {
        marketplaceAddress = _marketplaceAddress;
    }

    function registerUser(string memory username, string memory name, string memory bio, string memory profilePicUrl, string memory nftCollectionName, string memory nftCollectionSymbol, string memory tokenName, string memory tokenSymbol, uint256 tokenSupply) external returns (bool) {
        address temp = usernameToAddressMapping[username];
        require(temp == address(0), "Username already exists");
        
        Creator creator = new Creator(marketplaceAddress, username, name, bio, profilePicUrl, nftCollectionName, nftCollectionSymbol, tokenName, tokenSymbol, tokenSupply);
        usernameToCreatorMapping[username] = address(creator);
        addressToCreatorMapping[_msgSender()] = address(creator);

        emit UserRegistered(username, nftCollectionSymbol, tokenSymbol);

        return true;
    }

    function getCreatorAddress(string memory username) external view returns (address) {
        return usernameToCreatorMapping[username];
    }
}