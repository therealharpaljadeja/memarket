import { Heading, Grid, Box, HStack, VStack, Text, Avatar, Button, Tabs, TabList, Tab, Spacer, TabPanels, TabPanel, Image } from "@chakra-ui/react";
import { BiUser } from "react-icons/bi";
import { MdOutlineSell } from "react-icons/md"; 
import CustomAvatar from "../components/CustomAvatar"; 
import CustomTab from "../components/CustomTab";

function ProfilePage() {
    return (
        <Grid height="100vh"width="100vw" templateColumns={["1fr", "1fr 1fr 1fr", "1fr 1fr 1fr", "1fr 1fr 1fr"]}>
            <Box display={["none", "none", "block", "block"]} background="black.150">
            </Box>
            <VStack>
                <VStack marginTop="" justifyContent="center" padding={5} alignItems="center">
                    <CustomAvatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                    <VStack spacing={5} width="100%"  alignItems="center">
                        <Heading size="md" fontWeight="700">Dan Abrahmov</Heading>
                        <Heading size="sm">Dan Abrahmov is the react master.</Heading>
                        <HStack justifyContent="center" spacing="40px" width="100%">
                            <VStack>
                                <Heading size="md">100</Heading>
                                <Heading size="sm">Following</Heading>
                            </VStack>
                            <VStack>
                                <Heading size="md">100</Heading>
                                <Heading size="sm">Following</Heading>
                            </VStack>
                            <VStack>
                                <Heading size="md">20</Heading>
                                <Heading size="sm">Members</Heading>
                            </VStack>
                        </HStack>
                        <HStack>
                            <Button size="sm">Buy $DAN</Button>
                            <Button size="sm">Propose To DAO</Button>
                        </HStack>
                    </VStack>
                </VStack>
                <HStack width="100%">
                    <Tabs colorScheme="brand" isFitted overflowX="scroll" width="100%">
                        <TabList>
                            <CustomTab icon={<MdOutlineSell />} number="1" />
                            <CustomTab icon={<BiUser />} number="5" />
                        </TabList>
                        <TabPanels>
                            <TabPanel padding={0}>
                                <Grid overflowY="scroll" gridGap="1px" templateColumns="repeat(3, 1fr)">
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Red_Square1.jpg" />
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Red_Square1.jpg" />
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Red_Square1.jpg"/>
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Red_Square1.jpg" />
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Red_Square1.jpg" />
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Red_Square1.jpg"/>
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Red_Square1.jpg" />
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Red_Square1.jpg" />
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Red_Square1.jpg"/>
                                </Grid>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </HStack>
            </VStack>
            <Box display={["none", "none", "block", "block"]} background="black.150">
            </Box>
        </Grid>
    );
}
export default ProfilePage; 