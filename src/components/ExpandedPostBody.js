import { VStack, Button, Text } from "@chakra-ui/react";

function ExpandedPostBody() {
    return (
        <VStack borderBottom="1px solid" borderColor="brand.200" width="100%" justifyContent="space-between" px={4} py={2}>
            <VStack alignItems="flex-start"  width="100%">
                <Text fontSize="sm" noOfLines="3">Red Square (Russian: Красная площадь, tr. Krasnaya ploshchad', is one of the oldest and largest squares in Moscow, the capital of Russia.</Text>
            </VStack>
            <Button width="100%" size="md">Bid</Button>
        </VStack>
    );
}

export default ExpandedPostBody;