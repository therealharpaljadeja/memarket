import { useContext } from "react";
import Post from "./../components/Post";
import { VStack, Spinner, Heading } from "@chakra-ui/react";
import { Web3Context } from "../context/Web3Context";
import { tokenOwnedByUser } from "../utils/NFT";
import { useEffect } from "react/cjs/react.development";

function Feed() {

    const web3Context = useContext(Web3Context);
    const { fetchMarketItemsUsingSigner, fetchingMarketItems, marketItems } = web3Context;

    useEffect(() => {
        fetchMarketItemsUsingSigner();
    }, [])

    return (
        <VStack width="100%" alignItems="center">
            {
                fetchingMarketItems == true ?
                <Spinner />
                :
                    marketItems != null ?
                    marketItems.length != 0 ?
                    <>
                        {
                            marketItems.map(item => {
                                console.log(item);
                                return (
                                    <Post nft={item} id={item.tokenId} isExpanded={false} />
                                )
                            })
                        }
                    </>
                    :
                    <Heading paddingTop={4} size="md">No Items listed</Heading>
                    :
                    null
            }
            
        </VStack>
    );
}

export default Feed;