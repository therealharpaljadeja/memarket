import { VStack, Heading, HStack, Button } from "@chakra-ui/react";

function ProfileBody() {
    return (
        <VStack marginTop="35px !important" spacing={5} width="100%"  alignItems="center">
            <Heading size="md" fontWeight="700">Dan Abrahmov</Heading>
            <Heading size="sm">Dan Abrahmov is the react master.</Heading>
            <HStack justifyContent="center" spacing="40px" width="100%">
                <VStack>
                    <Heading fontWeight="700" size="md">100</Heading>
                    <Heading size="sm">Following</Heading>
                </VStack>
                <VStack>
                    <Heading size="md" fontWeight="700">100</Heading>
                    <Heading size="sm">Following</Heading>
                </VStack>
                <VStack>
                    <Heading size="md" fontWeight="700">20</Heading>
                    <Heading size="sm">Members</Heading>
                </VStack>
            </HStack>
            <HStack>
                <Button size="sm">Buy $DAN</Button>
                <Button disabled size="sm">Propose To DAO</Button>
            </HStack>
        </VStack>
    );
}

export default ProfileBody;