import { VStack, HStack, Text, Tag, Image, Button, Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react";
import Post from "../components/Post";
import Comment from "../components/Comment";
import Bid from "../components/Bid";
import BidHeader from "../components/BidHeader";

function PostPage() {
    return (
        <VStack spacing={0} width="100%">
            <Post isExpanded={true} />
            <Tabs isFitted width="100%">
                <TabList>
                    <Tab>Comments</Tab>
                    <Tab>Bids</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Comment />
                        <Comment />
                        <Comment />
                    </TabPanel>
                    <TabPanel padding={0}>
                        <BidHeader />
                        <VStack width="100%" padding={4}>
                            <Bid />
                        </VStack>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </VStack>
    );
}

export default PostPage;