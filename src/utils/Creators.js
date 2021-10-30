import { ethers, providers } from "ethers"
import Creators from "../abi/Creators.json";
import Creator from "../abi/Creator.json";

export const isUserRegistered = async (provider) => {
    const creatorsContract = new ethers.Contract(process.env.REACT_APP_CREATORS_CONTRACT_VELAS, Creators.abi, provider);
    let accounts = await provider.listAccounts();
    let result = await creatorsContract.isUserRegistered(accounts[0]); 
    return result;
}

export const getCreatorAddressByUsername = async (provider, username) => {
    const creatorsContract = new ethers.Contract(process.env.REACT_APP_CREATORS_CONTRACT_VELAS, Creators.abi, provider);
    let result = await creatorsContract.getCreatorAddressByUsername(username); 
    return result;
}

export const registerUser = async (provider, creator) => {
    const signer = provider.getSigner();
    const creatorsContract = new ethers.Contract(process.env.REACT_APP_CREATORS_CONTRACT_VELAS, Creators.abi, signer);
    let result = await creatorsContract.registerUser(creator.username, creator.name, creator.bio, creator.profilePicUrl, creator.nftCollectionName, creator.nftCollectionSymbol); 
    return result;
}

export const getCreatorAddressBySender = async (provider) => {
    const signer = provider.getSigner();
    const creatorsContract = new ethers.Contract(process.env.REACT_APP_CREATORS_CONTRACT_VELAS, Creators.abi, signer);
    let result = await creatorsContract.getCreatorAddressBySender(); 
    return result;
}

export const getCreatorObjFromAddress = async (provider, contractAddress) => {
    const signer = provider.getSigner();
    const creatorContract = new ethers.Contract(contractAddress, Creator.abi, signer);
    let username = await creatorContract.username();
    let name = await creatorContract.name();
    let bio = await creatorContract.bio();
    let profilePicUrl = await creatorContract.profilePicUrl();
    let nftCollectionName = await creatorContract.nftCollectionName();
    let nftCollectionSymbol = await creatorContract.nftCollectionSymbol();
    let nftCollectionAddress = await creatorContract.nftCollectionAddress();

    return {
        username,
        name,
        bio,
        nftCollectionName,
        nftCollectionSymbol,
        nftCollectionAddress,
        profilePicUrl
    }
}