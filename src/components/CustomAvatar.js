import { Box, Avatar } from "@chakra-ui/react";

function CustomAvatar(props) {
    return (
        <Box padding="2px" borderRadius="full" border="2px solid" borderColor="brand.100">
            <Avatar size="lg" {...props} />
        </Box>
    )
}

export default CustomAvatar;