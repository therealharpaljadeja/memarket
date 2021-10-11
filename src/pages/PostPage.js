import { VStack, HStack, Text, Tag, Image, Button, Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react";
import CustomAvatar from "../components/CustomAvatar";

function PostPage() {
    return (
        <VStack spacing={0} width="100%">
            <HStack borderBottom="1px solid" borderColor="brand.200" px={4} py={2} width="100%" justifyContent="flex-start">
                <CustomAvatar size="sm" name="Dan Abramov" />
                <Text>Dan Abrahmov</Text>
                <Tag>$19.00</Tag>
            </HStack>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Red_Square1.jpg" />
            <HStack borderBottom="1px solid" borderColor="brand.200" width="100%" justifyContent="space-between" px={4} py={2}>
                <VStack alignItems="flex-start"  width="100%">
                    <Text fontSize="sm" noOfLines="3">Red Square (Russian: Красная площадь, tr. Krasnaya ploshchad', is one of the oldest and largest squares in Moscow, the capital of Russia.</Text>
                </VStack>
                <Button size="sm">Bid</Button>
            </HStack>
            <Tabs isFitted width="100%">
                <TabList>
                    <Tab>Comments</Tab>
                    <Tab>Bids</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Text></Text>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </VStack>
    );
}

export default PostPage;