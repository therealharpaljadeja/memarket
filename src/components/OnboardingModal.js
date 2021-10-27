import { useContext, useState } from "react";
import { FormControl, Input, Textarea, VStack, FormLabel, Image } from "@chakra-ui/react";
import CustomModal from "./CustomModal";
// import Web3Storage from "web3.storage";

import { registerUser } from "../utils/Creators";
import { Web3Context } from "../context/Web3Context";

// console.log(process.env.REACT_APP_WEB3_STORAGE_API_TOKEN);
// const web3StorageClient = new Web3Storage({ token: process.env.REACT_APP_WEB3_STORAGE_API_TOKEN });
// const ipfsImageUpload = async (imageData) => {
//     const cid = await client.put(imageData);
//     console.log(cid);
//     return cid;
// }

function OnboardingModal({ isOpen, onClose, accountAddress }) {

    const web3Context = useContext(Web3Context);

    const { checkUserRegistered, registerCreator } = web3Context;

    const [ username, setUsername ] = useState("");
    const [ name, setName ] = useState("");
    const [ bio, setBio ] = useState("");
    const [ profilePicUrl, setProfilePicUrl ] = useState(null);
    const [ nftCollectionName, setNFTCollectionName ] = useState("");
    const [ nftCollectionSymbol, setNFTCollectionSymbol ] = useState("");
    const [ tokenName, setTokenName ] = useState("");
    const [ tokenSymbol, setTokenSymbol ] = useState("");
    const [ totalSupply, setTotalSupply ] = useState(0);
    const [ registeringUser, setRegisteringUser ] = useState(false);


    const handleSignUp = async () => {
        setRegisteringUser(true);
        
        const creator = {
            username,
            name,
            bio,
            profilePicUrl: "https://bit.ly/dan-abramov",
            nftCollectionName,
            nftCollectionSymbol,
            tokenName,
            tokenSymbol,
            totalSupply
        }

        await registerCreator(creator);

        await checkUserRegistered();
        setRegisteringUser(false);
    }

    const handleInputChange = (e, setter) => {
        setter(e.target.value);
    }

    // const onImageChange = ({ target }) => {
    //     if(target.files && target.files[0]) {
    //         const reader = new window.FileReader();
    //         reader.readAsArrayBuffer(target.files[0]);
    //         reader.onloadend = async () => {
    //             let imageData = Buffer(reader.result);
    //             let cid = await ipfsImageUpload(imageData);
    //             setProfilePicUrl(`https://ipfs.io/ipfs/${cid}`);
    //         }
    //     }
    // }

    return (
        <CustomModal
            isOpen={isOpen}
            onClose={onClose}
            modalCloseButton={false}
            modalHeader={`Onboarding`}
            modalFooterButtonText="Sign Up"
            modalButtonOnClick={handleSignUp}
        >
            <VStack spacing="10px">
                <FormControl>
                    <FormLabel borderRadius="full" boxSize="70px" margin="auto">
                        <Image margin="auto" boxSize="70px" borderRadius="full" src={profilePicUrl == null ? "https://bit.ly/dan-abramov" : profilePicUrl} />
                    </FormLabel>
                    <Input display="none" type="file" accept="image/*" />
                </FormControl>
                <FormControl>
                    <Input placeholder="accountAddress" disabled value={accountAddress} />
                </FormControl>
                <FormControl>
                    <Input placeholder="username" onChange={(e) => handleInputChange(e, setUsername)} value={username} />
                </FormControl>
                <FormControl>
                    <Input placeholder="name" onChange={(e) => handleInputChange(e, setName)} value={name} />
                </FormControl>
                <FormControl>
                    <Textarea placeholder="bio" onChange={(e) => handleInputChange(e, setBio)} value={bio} />
                </FormControl>
                <FormControl>
                    <Input placeholder="NFT Collection Name" onChange={(e) => handleInputChange(e, setNFTCollectionName)} value={nftCollectionName} />
                </FormControl>
                <FormControl>
                    <Input placeholder="NFT Symbol" onChange={(e) => handleInputChange(e, setNFTCollectionSymbol)} value={nftCollectionSymbol} />
                </FormControl>
                <FormControl>
                    <Input placeholder="Token Name" onChange={(e) => handleInputChange(e, setTokenName)} value={tokenName} />
                </FormControl>
                <FormControl>
                    <Input placeholder="Token Symbol" onChange={(e) => handleInputChange(e, setTokenSymbol)} value={tokenSymbol} />
                </FormControl>
                <FormControl>
                    <Input placeholder="Total Supply" onChange={(e) => handleInputChange(e, setTotalSupply)} value={totalSupply} />
                </FormControl>
            </VStack>
        </CustomModal>
    );
}

export default OnboardingModal;