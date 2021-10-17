import { HStack, VStack, Button, Text } from "@chakra-ui/react";

function PostBody() {
    return (
        <HStack borderBottom="1px solid" borderColor="brand.200" width="100%" justifyContent="space-between" px={4} py={2}>
            <VStack alignItems="flex-start"  width="100%">
                <Text fontSize="sm" noOfLines="3">Red Square (Russian: Красная площадь, tr. Krasnaya ploshchad', is one of the oldest and largest squares in Moscow, the capital of Russia.</Text>
            </VStack>
            <Button size="sm">Bid</Button>
        </HStack>
    );
}

export default PostBody;