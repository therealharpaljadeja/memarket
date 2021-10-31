import { ethers } from "ethers";
import NFT from "../abi/NFT.json";
import { getNFTCollectionAddress } from "./Creator";
import axios from "axios";
import Creator from "../abi/Creator.json";

export const balanceOf = async (provider, creatorAddress) => {
    let accounts = await provider.listAccounts();
    let signer = provider.getSigner();
    let collectionAddress = getNFTCollectionAddress(provider, creatorAddress);
    let nftContract = new ethers.Contract(collectionAddress, NFT.abi, provider);
    let result = await nftContract.balanceOf(accounts[0]);
    return result;
}

export const mintNFT = async (provider, creatorAddress, tokenURI) => {
    const signer = provider.getSigner();
    let collectionAddress = await getNFTCollectionAddress(provider, creatorAddress);
    let nftContract = new ethers.Contract(collectionAddress, NFT.abi, signer);
    let result = await nftContract.createToken(tokenURI);
    console.log(result);
    return result;
}

export const tokenOwnedByUser = async (provider, creatorAddress) => {
    const signer = provider.getSigner();
    const ownerAddress = await signer.getAddress();
    let collectionAddress = await getNFTCollectionAddress(provider, creatorAddress);
    console.log(collectionAddress);
    let nftContract = new ethers.Contract(collectionAddress, NFT.abi, signer);
    let balanceOfOwner = await balanceOf(provider, creatorAddress);
    let nfts = [];
    for(let i = 0; i < balanceOfOwner; i++) {
        let tokenId = await nftContract.tokenOfOwnerByIndex(ownerAddress, i);
        let tokenURI = await nftContract.tokenURI(tokenId);
        console.log(tokenURI);
        let response = await axios.get(tokenURI);
        const { name, description } = response.data;
        let ImageUrlSplit = response.data.image.split("/", 4);
        let imageUrl = `https://ipfs.io/ipfs/${ImageUrlSplit[ImageUrlSplit.length - 2] + '/'+ ImageUrlSplit[ImageUrlSplit.length - 1]}`
        let nft = {
            name,
            description,
            image: imageUrl,
            collectionAddress,
            creatorAddress,
            tokenId
        }
        nfts.push(nft);
    }

    return nfts;
}


export const tokenMetadata = async (provider, creatorAddress, collectionAddress, tokenId) => {
    const signer = provider.getSigner();
    let nftContract = new ethers.Contract(collectionAddress, NFT.abi, signer);
    let isApprovedByOwner = await nftContract.isApprovedToMarketplace(process.env.REACT_APP_MARKETPLACE_CONTRACT_VELAS, tokenId);
    let owner = await nftContract.ownerOf(tokenId);
    let creatorContract = new ethers.Contract(creatorAddress, Creator.abi, signer);
    
    let creator = {};
    creator.username = await creatorContract.username();
    creator.name = await creatorContract.name();
    creator.bio = await creatorContract.bio();
    creator.profilePicUrl = await creatorContract.profilePicUrl();

    let tokenURI = await nftContract.tokenURI(tokenId);
    let response = await axios.get(tokenURI);
    const { name, description } = response.data;
    let ImageUrlSplit = response.data.image.split("/", 4);
    let imageUrl = `https://ipfs.io/ipfs/${ImageUrlSplit[ImageUrlSplit.length - 2] + '/'+ ImageUrlSplit[ImageUrlSplit.length - 1]}`
    
    let nft = {
        name,
        description,
        image: imageUrl,
        collectionAddress,
        tokenId,
        creator,
        owner,
        isApprovedByOwner
    }

    console.log(nft);

    return nft;
}

export const approveToMarketplace = async (provider, collectionAddress, tokenId) => {
    const signer = provider.getSigner();
    let nftContract = new ethers.Contract(collectionAddress, NFT.abi, signer);
    await nftContract.approve(process.env.REACT_APP_MARKETPLACE_CONTRACT_VELAS, tokenId);
} 