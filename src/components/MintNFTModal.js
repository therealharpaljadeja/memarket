import { useState } from "react";
import CustomModal from "./CustomModal";
import { IoMdAdd } from "react-icons/io";
import { VStack, HStack, FormControl, FormLabel, Input, Button, Textarea, Image } from "@chakra-ui/react";

function MintNFTModal({ isOpen, onClose }) {

    const [ isImageUploading, setIsImageUploading ] = useState(false);
    const [ isImageUploaded, setIsImageUploaded ] = useState(false);

    return (
        <CustomModal isOpen={isOpen} onClose={onClose} modalHeader="Mint NFT" modalCloseButton={true} modalFooterButtonText="Mint">
            <VStack spacing={5} alignItems="flex-start">
                {
                    isImageUploaded ?
                    <Image />
                    :
                    null
                }
                <FormControl>
                    <FormLabel>Image</FormLabel>
                    <Input type="file" />
                </FormControl>
                <FormControl>
                    <FormLabel>Title</FormLabel>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Textarea />
                </FormControl>
            </VStack>
        </CustomModal>
    );
}

export default MintNFTModal;