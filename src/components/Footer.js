import { HStack } from "@chakra-ui/react";
import { GrHomeRounded } from "react-icons/gr";
import { AiOutlineUser } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";


function Footer() {
    return (
        <HStack background="white" width="100%" bottom={0} position="sticky" borderTop="1px solid" borderColor="brand.200" justifyContent="space-between" alignSelf="flex-end" padding={5} width="100%" height="8vh" boxShadow="0 -10px 200px 6px rgba(0,0,0,.1)">
            <GrHomeRounded size="22px" />
            <FiUsers size="22px" />
            <IoMdAdd size="25px" />
            <BsChatLeft size="22px" />
            <AiOutlineUser size="25px" />
        </HStack>
    )   
}

export default Footer;