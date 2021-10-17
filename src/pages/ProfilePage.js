import { Heading, Grid, Box, HStack, VStack, Text, Avatar, Button, Tabs, TabList, Tab, Spacer, TabPanels, TabPanel, Image } from "@chakra-ui/react";
import { BiUser } from "react-icons/bi";
import { MdOutlineSell } from "react-icons/md"; 
import CustomAvatar from "../components/CustomAvatar"; 
import CustomTab from "../components/CustomTab";
import ProfileBody from "../components/ProfileBody";
import ProfileHeader from "../components/ProfileHeader";

function ProfilePage() {
    return (
        <VStack width="100%" padding={0}>
            <ProfileHeader />
            <ProfileBody />
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
    );
}
export default ProfilePage; 