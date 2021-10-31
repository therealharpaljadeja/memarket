import NFTMarket from "../abi/NFTMarket.json";
import { ethers }  from "ethers";
import NFT from "../abi/NFT.json";
import Creators from "../abi/Creators.json";
import Creator from "../abi/Creator.json";
import axios from "axios";



export const fetchItemsCreated = async (provider) => {
    const signer = provider.getSigner();
    let nftMarketContract = new ethers.Contract(process.env.REACT_APP_MARKETPLACE_CONTRACT_VELAS, NFTMarket.abi, signer);
    let result = await nftMarketContract.fetchItemsCreated();

    let nfts = [];  
    for(let i = 0; i < result.length; i++) {

        if(result[i].sold != true) {
            let nft = {};
            
            let nftContract = new ethers.Contract(result[i].nftContract, NFT.abi, signer);

            let tokenURI = await nftContract.tokenURI(result[i].tokenId.toString());
            let owner = await nftContract.ownerOf(result[i].tokenId.toString());
            let response = await axios.get(tokenURI);
            const { name, description } = response.data;
            let ImageUrlSplit = response.data.image.split("/", 4);

            let imageUrl = `https://ipfs.io/ipfs/${ImageUrlSplit[ImageUrlSplit.length - 2] + '/'+ ImageUrlSplit[ImageUrlSplit.length - 1]}`
            // let isApprovedByOwner = await nftContract.isApprovedToMarketplace(process.env.REACT_APP_MARKETPLACE_CONTRACT_VELAS, result[i].tokenId.toString());
            const creatorsContract = new ethers.Contract(process.env.REACT_APP_CREATORS_CONTRACT_VELAS, Creators.abi, signer);
            let creatorAddress = await creatorsContract.getCreatorAddressByAddress(result[i].seller);
            let creatorContract = new ethers.Contract(creatorAddress, Creator.abi, signer);
            let sellerName = await creatorContract.name();
            let sellerProfilePic = await creatorContract.profilePicUrl();
            
            nft.collectionAddress = result[i].nftContract;
            nft.seller = result[i].seller;
            nft.price = ethers.utils.formatEther(result[i].price);
            nft.tokenId = result[i].tokenId.toString();
            nft.owner = owner;
            nft.name = name;
            nft.description = description;
            nft.image = imageUrl;
            nft.creatorAddress = creatorAddress;
            nft.creator = {};
            nft.creator.name = sellerName;
            nft.creator.profilePicUrl = sellerProfilePic;
            // nft.isApprovedByOwner = isApprovedByOwner;

            console.log(nft);

            nfts.push(nft);
        }
    }

    return nfts;
} 

export const fetchMarketItems = async (provider) => {
    const signer = provider.getSigner();
    let nftMarketContract = new ethers.Contract(process.env.REACT_APP_MARKETPLACE_CONTRACT_VELAS, NFTMarket.abi, signer);
    let result = await nftMarketContract.fetchMarketItems();
    let nfts = [];  
    for(let i = 0; i < result.length; i++) {
        let nft = {};
        
        let nftContract = new ethers.Contract(result[i].nftContract, NFT.abi, signer);

        let tokenURI = await nftContract.tokenURI(result[i].tokenId.toString());
        let owner = await nftContract.ownerOf(result[i].tokenId.toString());
        let response = await axios.get(tokenURI);
        const { name, description } = response.data;
        let ImageUrlSplit = response.data.image.split("/", 4);

        let imageUrl = `https://ipfs.io/ipfs/${ImageUrlSplit[ImageUrlSplit.length - 2] + '/'+ ImageUrlSplit[ImageUrlSplit.length - 1]}`
        // let isApprovedByOwner = await nftContract.isApprovedToMarketplace(process.env.REACT_APP_MARKETPLACE_CONTRACT_VELAS, result[i].tokenId.toString());
        const creatorsContract = new ethers.Contract(process.env.REACT_APP_CREATORS_CONTRACT_VELAS, Creators.abi, signer);
        let creatorAddress = await creatorsContract.getCreatorAddressByAddress(result[i].seller);
        let creatorContract = new ethers.Contract(creatorAddress, Creator.abi, signer);
        let sellerName = await creatorContract.name();
        let sellerProfilePic = await creatorContract.profilePicUrl();
        
        nft.collectionAddress = result[i].nftContract;
        nft.seller = result[i].seller;
        nft.price = ethers.utils.formatEther(result[i].price);
        nft.tokenId = result[i].tokenId.toString();
        nft.owner = owner;
        nft.name = name;
        nft.description = description;
        nft.image = imageUrl;

        nft.creator = {};
        nft.creator.name = sellerName;
        nft.creator.profilePicUrl = sellerProfilePic;
        // nft.isApprovedByOwner = isApprovedByOwner;

        nfts.push(nft);
    }

    return nfts;
}

export const fetchMyNFTs = async (provider) => {
    const signer = provider.getSigner();
    let nftMarketContract = new ethers.Contract(process.env.REACT_APP_MARKETPLACE_CONTRACT_VELAS, NFTMarket.abi, signer);
    let result = await nftMarketContract.fetchMyNFTs();
    let nfts = [];  
    for(let i = 0; i < result.length; i++) {
        let nft = {};
        
        let nftContract = new ethers.Contract(result[i].nftContract, NFT.abi, signer);

        let tokenURI = await nftContract.tokenURI(result[i].tokenId.toString());
        let owner = await nftContract.ownerOf(result[i].tokenId.toString());
        let response = await axios.get(tokenURI);
        const { name, description } = response.data;
        let ImageUrlSplit = response.data.image.split("/", 4);

        let imageUrl = `https://ipfs.io/ipfs/${ImageUrlSplit[ImageUrlSplit.length - 2] + '/'+ ImageUrlSplit[ImageUrlSplit.length - 1]}`
        // let isApprovedByOwner = await nftContract.isApprovedToMarketplace(process.env.REACT_APP_MARKETPLACE_CONTRACT_VELAS, result[i].tokenId.toString());
        const creatorsContract = new ethers.Contract(process.env.REACT_APP_CREATORS_CONTRACT_VELAS, Creators.abi, signer);
        let creatorAddress = await creatorsContract.getCreatorAddressByAddress(result[i].seller);
        let creatorContract = new ethers.Contract(creatorAddress, Creator.abi, signer);
        let sellerName = await creatorContract.name();
        let sellerProfilePic = await creatorContract.profilePicUrl();
        
        nft.collectionAddress = result[i].nftContract;
        nft.seller = result[i].seller;
        nft.price = ethers.utils.formatEther(result[i].price);
        nft.tokenId = result[i].tokenId.toString();
        nft.owner = owner;
        nft.name = name;
        nft.description = description;
        nft.image = imageUrl;

        nft.creator = {};
        nft.creator.name = sellerName;
        nft.creator.profilePicUrl = sellerProfilePic;
        // nft.isApprovedByOwner = isApprovedByOwner;

        nfts.push(nft);
    }

    return nfts;
}

export const createSale = async (provider, collectionAddress, tokenId, price) => {
    const signer = provider.getSigner();
    let nftMarketContract = new ethers.Contract(process.env.REACT_APP_MARKETPLACE_CONTRACT_VELAS, NFTMarket.abi, signer);
    let result = await nftMarketContract.createMarketSale(collectionAddress, tokenId, { value: price });
    return result;
}

export const createMarketItem = async (provider, collectionAddress, tokenId, price) => {
    const signer = provider.getSigner();
    let nftMarketContract = new ethers.Contract(process.env.REACT_APP_MARKETPLACE_CONTRACT_VELAS, NFTMarket.abi, signer);
    let result = await nftMarketContract.createMarketItem(collectionAddress, tokenId, price, { value: ethers.utils.parseUnits("0.025", "ether") });
    return result;
}