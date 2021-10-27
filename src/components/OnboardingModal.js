import { FormControl, Input, Textarea, VStack } from "@chakra-ui/react";
import CustomModal from "./CustomModal";


function OnboardingModal({ isOpen, onClose }) {
    return (
        <CustomModal
            isOpen={isOpen}
            onClose={onClose}
            modalCloseButton={false}
            modalHeader={`Onboarding`}
            modalFooterButtonText="Sign Up"
        >
            <VStack spacing="10px">
                <FormControl>
                    <Input placeholder="username" />
                </FormControl>
                <FormControl>
                    <Input placeholder="name" />
                </FormControl>
                <FormControl>
                    <Textarea placeholder="bio" />
                </FormControl>
                <FormControl>
                    <Input placeholder="NFT Collection Name" />
                </FormControl>
                <FormControl>
                    <Input placeholder="NFT Symbol" />
                </FormControl>
                <FormControl>
                    <Input placeholder="Token Name" />
                </FormControl>
                <FormControl>
                    <Input placeholder="Token Symbol" />
                </FormControl>
                <FormControl>
                    <Input placeholder="Total Supply" />
                </FormControl>
            </VStack>
        </CustomModal>
    );
}

export default OnboardingModal;