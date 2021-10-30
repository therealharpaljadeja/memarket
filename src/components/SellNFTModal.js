import { useState, useContext } from "react";
import CustomModal from "./CustomModal";
import { ethers } from "ethers";
import { VStack, HStack, FormControl, FormLabel, Input, Button, Textarea, Image, Text, Divider, Heading,  } from "@chakra-ui/react";
import { Web3Context } from "../context/Web3Context";

function SellNFTModal ({ isOpen, onClose, name, collectionAddress, tokenId }) {
    const [ price, setPrice ] = useState(0);
    
    const web3Context = useContext(Web3Context);
    const { creatingMarketItem, createMarketItemUsingSigner } = web3Context;

    const handleInputChange = ({ target }) => {
        setPrice(target.value);
    }

    const handleSell = async () => {
        let priceInWei = ethers.utils.parseUnits(price, "ether");
        console.log("creating sale!");
        createMarketItemUsingSigner(collectionAddress, tokenId, priceInWei);
    }

    return (
        <CustomModal isOpen={isOpen} onClose={onClose} modalCloseButton={true} modalHeader={`Sell ${name}`} modalFooterButtonText="Sell" modalButtonLoadingState={creatingMarketItem} modalButtonOnClick={handleSell}>
            <VStack spacing={5} px="60px">
                <Input onChange={handleInputChange} value={price} size="lg" variant="unstyled" textAlign="center" fontSize="3xl" placeholder="0" />
                <Text>Velas</Text>
                <VStack>
                    <Text>Listing Fee: 0.025 Velas</Text>
                    <Text>List for {parseFloat(price) - 0.025} Velas</Text>
                    {/* <CgArrowsExchange />  */}
                </VStack>
            </VStack>
        </CustomModal>
    );
}
export default SellNFTModal;