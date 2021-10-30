import { ethers } from "ethers"
import Creator from "../abi/Creator.json";

export const getNFTCollectionAddress = async (provider, creatorAddress) => {
    let signer = provider.getSigner();
    const creatorContract = new ethers.Contract(creatorAddress, Creator.abi, signer);
    let result = await creatorContract.nftCollectionAddress();
    return result;
}





