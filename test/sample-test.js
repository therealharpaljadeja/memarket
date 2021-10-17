const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFT", function() {
  // it("Creating NFT", async function() {
  //   const NFT = await ethers.getContractFactory("NFT");
  //   const nft = await NFT.deploy("Best Collection", "BC");
  //   await nft.deployed();

  //   const nftCreated = await nft.createToken("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg");
  // });

  // it("List NFT on Market", async function () {
  //   const NFT = await ethers.getContractFactory("NFT");
  //   const nft = await NFT.deploy("Best Collection", "BC");
  //   await nft.deployed();

  //   const nftCreated = await nft.createToken("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg");
  //   // console.log(nftCreated);

  //   const auctionPrice = ethers.utils.parseUnits('0.1', 'ether');    

  //   let NFTMarket = await ethers.getContractFactory("NFTMarket");
  //   let nftMarket = await NFTMarket.deploy();
  //   await nftMarket.deployed();

  //   const listingPrice = await nftMarket.getListingPrice();

  //   nftMarket.createMarketItem(nft.address, 1, auctionPrice, { value: listingPrice });

  //   // const created = await nftMarket.fetchItemsCreated();
  //   // console.log(created);
  // });

  // it("Testing ERC20Receivable", async function() {
  //   let totalSupply = ethers.utils.parseUnits("100", "ether");

  //   let Token = await ethers.getContractFactory("Token");
  //   let token = await Token.deploy(totalSupply);
  //   await token.deployed();

  //   let Receiver = await ethers.getContractFactory("Greeter");
  //   let receiver = await Receiver.deploy(token.address);
  //   await receiver.deployed();

  //   const [ firstAddress ] = await ethers.getSigners();
  //   let valueToPay = ethers.utils.parseUnits("300", "ether");
  //   token.approve(receiver.address, valueToPay);

  //   let walletBalance = await token.balanceOf(firstAddress.address);
  //   console.log(ethers.utils.formatEther(walletBalance.toString()));

  //   let allowance = await token.connect(firstAddress.address).allowance(firstAddress.address, receiver.address);
  //   console.log(ethers.utils.formatEther(allowance.toString()));

  //   await receiver.payERC20();

  //   let balanceOfReceiver = await token.balanceOf(receiver.address);
  //   console.log(ethers.utils.formatEther(balanceOfReceiver.toString()));

  // });

  it("Buying NFT using ERC20 Token", async function () {
    let totalSupply = ethers.utils.parseUnits("100", "ether");

    let Token = await ethers.getContractFactory("Token");
    let token = await Token.deploy(totalSupply);
    await token.deployed();

    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy("Best Collection", "BC");
    await nft.deployed();

    const nftCreated = await nft.createToken("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg");
    
    let NFTMarket = await ethers.getContractFactory("NFTMarket");
    let nftMarket = await NFTMarket.deploy();
    await nftMarket.deployed();

    const auctionPrice = ethers.utils.parseUnits('10', 'ether');    
    const listingPrice = await nftMarket.getListingPrice();

    const [ firstSigner, buyerSigner ] = await ethers.getSigners();
    await nft.connect(firstSigner).approve(nftMarket.address, 1);

    await token.connect(firstSigner).transfer(buyerSigner.address, ethers.utils.parseUnits('10', 'ether'));

    await nftMarket.createMarketItem(nft.address, token.address, 1, auctionPrice, { value: listingPrice });

    await token.connect(buyerSigner).approve(nftMarket.address, auctionPrice);

    await nftMarket.connect(buyerSigner).createMarketSale(nft.address, 1);
    let nftBalance = await nft.balanceOf(buyerSigner.address);
  });
});