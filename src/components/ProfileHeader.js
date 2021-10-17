import { VStack } from "@chakra-ui/react";
import CustomAvatar from "./CustomAvatar";

function ProfileHeader() {
    return (
        <VStack width="100%" height="80px" position="relative" backgroundImage="url('https://pbs.twimg.com/media/D-jnKUPU4AE3hVR.jpg')">
            <CustomAvatar top="90%" left="50%" transform="translate(-50%, -50%)" position="absolute" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </VStack>
    );
}

export default ProfileHeader;