import { useContext } from "react";
import { Web3Context } from "../context/Web3Context";

import { HStack, Input, VStack, IconButton, Textarea, ButtonGroup, Button, FormControl, FormLabel, useDisclosure } from "@chakra-ui/react";
import { GrHomeRounded } from "react-icons/gr";
import { AiOutlineConsoleSql, AiOutlineUser } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import MintNFTModal from "./MintNFTModal";
import { useEffect } from "react/cjs/react.development";


function Footer() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const web3Context = useContext(Web3Context);
    const { account } = web3Context;

    return (
        <>
            <MintNFTModal isOpen={isOpen} onClose={onClose} />
            <HStack background="white" width="100%" bottom={0} position="sticky" borderTop="1px solid" borderColor="brand.200" justifyContent="space-between" alignSelf="flex-end" padding={5} width="100%" height="8vh" boxShadow="0 -10px 200px 6px rgba(0,0,0,.1)">
                <GrHomeRounded disabled={(account == null || account == undefined).toString()} size="22px" />
                <FiUsers disabled={(account == null || account == undefined).toString()} size="22px" />
                <IconButton disabled={account == null || account == undefined} onClick={onOpen} icon={<IoMdAdd stroke-width="60px" />} />
                {/* <IoMdAdd size="25px" /> */}
                <BsChatLeft disabled={(account == null || account == undefined).toString()} size="22px" />
                <AiOutlineUser disabled={(account == null || account == undefined).toString()} size="25px" />
            </HStack>
        </>
    )   
}

export default Footer;