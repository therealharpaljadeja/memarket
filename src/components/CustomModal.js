import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, Button } from "@chakra-ui/react";


function CustomModal(props) {
    
    const { isOpen, onClose, modalHeader, modalCloseButton, children, modalFooterButtonText } = props;

    return (
        <Modal isCentered={true} isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader color="black.600">{modalHeader}</ModalHeader>
                {
                    modalCloseButton ?
                    <ModalCloseButton />
                    :
                    null
                }
                <ModalBody>
                    {children}
                </ModalBody>
                <ModalFooter>
                    <Button width="100%" size="lg">{modalFooterButtonText}</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default CustomModal;