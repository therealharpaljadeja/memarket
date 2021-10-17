import { HStack, Text, Tag } from "@chakra-ui/react";
import CustomAvatar from "./CustomAvatar";

function PostHeader() {
    return (
        <>
            <HStack borderBottom="1px solid" borderColor="brand.200" px={4} py={2} width="100%" justifyContent="flex-start">
                <CustomAvatar size="sm" name="Dan Abramov" />
                <Text>Dan Abrahmov</Text>
                <Tag>$19.00</Tag>
            </HStack>
        </>
    );
}

export default PostHeader;