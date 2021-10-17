import { HStack, VStack, Heading, Text } from "@chakra-ui/react";

function BidHeader() {
    return (
        <HStack justifyContent="center" width="100%" borderBottom="1px solid" borderColor="brand.200" padding={4}>
            <VStack alignItems="flex-start">
                <Text size="sm">
                    Current Highest Bidder
                </Text>
                <Heading>
                    disco.eth
                </Heading>
            </VStack>
            <VStack alignItems="flex-start">
                <Text size="sm">
                    Current Highest Bidder
                </Text>
                <Heading>
                    3.1 Celo
                </Heading>
            </VStack>
        </HStack>
    );
}

export default BidHeader;