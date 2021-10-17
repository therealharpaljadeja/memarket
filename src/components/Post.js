import { HStack, Text, Tag, VStack, Button, Image } from "@chakra-ui/react";
import ExpandedPostBody from "./ExpandedPostBody";
import PostBody from "./PostBody";
import PostHeader from "./PostHeader";

function Post({ isExpanded }) {
    return (
        <>
            <PostHeader />            
            <Image src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Red_Square1.jpg" />
            {
                isExpanded ?
                <ExpandedPostBody />
                :
                <PostBody />
            }
        </>
    );
}

export default Post;