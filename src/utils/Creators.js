import { ethers } from "ethers"
import Creators from "../abi/Creators.json";

export const isUserRegistered = async (signer) => {
    const creatorsContract = new ethers.Contract(process.env.REACT_APP_CREATORS_CONTRACT_ADDRESS, Creators.abi, signer);
    let accounts = await signer.listAccounts();
    let result = await creatorsContract.isUserRegistered(accounts[0]); 
    return result;
}

export const getCreatorAddress = async (signer, username) => {
    const creatorsContract = new ethers.Contract(process.env.REACT_APP_CREATORS_CONTRACT_ADDRESS, Creators.abi, signer);
    let result = await creatorsContract.getCreatorAddress(username); 
    console.log(result);
}

export const registerUser = async (provider, creator) => {
    const signer = provider.getSigner();
    const creatorsContract = new ethers.Contract(process.env.REACT_APP_CREATORS_CONTRACT_ADDRESS, Creators.abi, signer);
    let result = await creatorsContract.registerUser(creator.username, creator.name, creator.bio, creator.profilePicUrl, creator.nftCollectionName, creator.nftCollectionSymbol, creator.tokenName, creator.tokenSymbol, creator.totalSupply); 
    console.log(result);
}
