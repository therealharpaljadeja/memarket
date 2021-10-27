import { ethers } from "ethers"
import { creatorABI } from "../abi";



export const isUserRegistered = async (signer) => {
    const creatorContract = new ethers.Contract(process.env.CREATOR_CONTRACT_ADDRESS, creatorABI, signer);
    return await creatorContract.isUserRegistered(await signer.getAddress());
}