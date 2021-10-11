import { HStack, Text } from "@chakra-ui/react";
import { FiSettings } from "react-icons/fi";

function Header() {
    return (
        <HStack top={0} justifyContent="space-between" padding={4} borderBottom="1px solid" borderColor="brand.200" position="sticky" zIndex="1000" background="light.200" width="100%" height="8vh" boxShadow="0 10px 200px 6px rgba(0,0,0,.1)">
            <Text color="brand.100">CrEco</Text>
            <FiSettings stroke="#007aff" />
        </HStack>
    );
}

export default Header;