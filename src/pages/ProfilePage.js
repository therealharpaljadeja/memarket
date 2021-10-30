import { Grid, Box, HStack, VStack, Text, Heading, Spinner, Avatar, Button, Tabs, TabList, Tab, Spacer, TabPanels, TabPanel, Image } from "@chakra-ui/react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { MdOutlineSell } from "react-icons/md"; 
import { useEffect } from "react/cjs/react.development";
import CustomTab from "../components/CustomTab";
import ProfileBody from "../components/ProfileBody";
import ProfileHeader from "../components/ProfileHeader";
import { Web3Context } from "../context/Web3Context";

function ProfilePage() {

    const web3Context = useContext(Web3Context);
    const { creator, creatorAddress, getNFTsOwnerByUserUsingSigner, loadingNFT, currentUserNFTs, currentUserNFTOnMarketplace, fetchItemsCreatedUsingSigner } = web3Context;
    const { username, name, bio, profilePicUrl, nftCollectionName, nftCollectionSymbol } = creator;
    const [ userConnected, setUserConnected ] = useState(false);

    useEffect(() => {
        if(creatorAddress != null && creator != null) {
            getNFTsOwnerByUserUsingSigner();
            fetchItemsCreatedUsingSigner();
        } 
    },[creatorAddress]);  


    return (
        <VStack width="100%" padding={0}>
            {
                creator != null ?
                <>
                    <ProfileHeader username={username} profilePicUrl={profilePicUrl} />
                    {
                        currentUserNFTs != null && currentUserNFTOnMarketplace != null ?
                        <ProfileBody nftOwned={currentUserNFTs.length + currentUserNFTOnMarketplace.length} username={username} bio={bio} name={name} />
                        :
                        <Spinner />
                    }
                    <HStack justifyContent="center" width="100%">
                        {
                            loadingNFT == false && currentUserNFTs != null && currentUserNFTOnMarketplace != null ?
                            <Tabs colorScheme="brand" isFitted overflowX="scroll" width="100%">
                                <TabList>
                                    <CustomTab icon={<MdOutlineSell />} number={currentUserNFTs.length} />
                                    <CustomTab icon={<BiUser />} number={currentUserNFTOnMarketplace.length} />
                                </TabList>
                                <TabPanels>
                                    <TabPanel padding={0}>
                                        {
                                            currentUserNFTs != null ?
                                            currentUserNFTs.length != 0 ?
                                            <Grid overflowY="scroll" gridGap="1px" templateColumns="repeat(3, 1fr)">
                                                
                                                {
                                                    currentUserNFTs.map(nft => {
                                                        let toUrl = `/nft/${nft.creatorAddress}/${nft.collectionAddress}/${nft.tokenId}`
                                                        return (
                                                        <Link to={toUrl}>
                                                            <Image key={nft.name} src={nft.image} />
                                                        </Link>
                                                        );
                                                    })
                                                }
                                            </Grid>
                                            :
                                            <Heading pt={3} textAlign="center" size="sm">No NFTs</Heading>
                                            :
                                            <Spinner />    
                                        }

                                    </TabPanel>
                                    <TabPanel padding={0}>
                                    <Grid overflowY="scroll" gridGap="1px" templateColumns="repeat(3, 1fr)">
                                            {
                                                currentUserNFTOnMarketplace != null ?
                                                currentUserNFTOnMarketplace.map(nft => {
                                                        let toUrl = `/nft/${nft.creatorAddress}/${nft.collectionAddress}/${nft.tokenId}`
                                                        return (
                                                            <Link to={toUrl}>
                                                                <Image key={nft.name} src={nft.image} />
                                                            </Link>
                                                        )
                                                    })
                                                :
                                                <Spinner />
                                            }
                                        </Grid>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                            :
                            <Spinner />
                        }
                    </HStack>
                </>
                :
                <Spinner />
            }
            
        </VStack>
    );
}
export default ProfilePage; 