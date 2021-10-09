import { Heading, Grid, Box, HStack, VStack, Text, Avatar, Button, Tabs, TabList, Tab } from "@chakra-ui/react";
import { GrHomeRounded } from "react-icons/gr";
import { AiOutlineUser } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { FiUsers, FiSettings } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";

import CustomAvatar from "../components/CustomAvatar"; 

function ProfilePage() {
    return (
        <Grid height="100vh" templateColumns={["1fr", "1fr 1fr 1fr", "1fr 1fr 1fr", "1fr 1fr 1fr"]}>
            <Box display={["none", "none", "block", "block"]} background="black.150">
            </Box>
            <VStack>
                <HStack justifyContent="space-between" padding={4} borderBottom="1px solid" borderColor="brand.200" position="sticky" zIndex="1000" background="light.200" width="100%" height="8vh" width="inherit" boxShadow="0 10px 200px 6px rgba(0,0,0,.1)">
                    <Text color="brand.100">CrEco</Text>
                    <FiSettings stroke="#007aff" />
                </HStack>
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
                <HStack overflowX="scroll" width="100%">
                    <Tabs overflowX="scroll" isFitted width="100%">
                        <TabList>
                            <Tab>Listed</Tab>
                            <Tab>Owned</Tab>
                            <Tab>Listed</Tab>
                            <Tab>Listed</Tab>
                            <Tab>Listed</Tab>
                            <Tab>Listed</Tab>
                        </TabList>
                    </Tabs>
                </HStack>
                <HStack width="100%" position="sticky" borderTop="1px solid" borderColor="brand.200" justifyContent="space-between" alignSelf="flex-end" padding={5} width="100%" height="8vh"  width="inherit" boxShadow="0 -10px 200px 6px rgba(0,0,0,.1)">
                    <GrHomeRounded size="22px" />
                    <FiUsers size="22px" />
                    <IoMdAdd size="25px" />
                    <BsChatLeft size="22px" />
                    <AiOutlineUser size="25px" />
                </HStack>
            </VStack>
            <Box  display={["none", "none", "block", "block"]} background="black.150">
            </Box>
        </Grid>
    );
}
export default ProfilePage; 