import { FormLabel, FormControl, VStack, Image, Input, Textarea } from "@chakra-ui/react";
import CustomModal from "./CustomModal";

function ProfileSettingsModal({ isOpen, onClose }) {
    return (
        <CustomModal isOpen={isOpen} onClose={onClose} modalHeader="Settings" modalFooterButtonText="Save" modalCloseButton={true}>
            <VStack alignItems="center">
                <FormControl>
                    <FormLabel width="100%" height="100%">
                        <Image margin="auto" borderRadius="full" boxSize="80px" src="https://bit.ly/dan-abramov" />
                    </FormLabel>
                    <Input type="file" display="none" />
                </FormControl>
                <FormControl>
                    <FormLabel>
                        Name
                    </FormLabel>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormLabel>
                        Bio
                    </FormLabel>
                    <Textarea />
                </FormControl>
            </VStack>
        </CustomModal>
    );
}

export default ProfileSettingsModal;