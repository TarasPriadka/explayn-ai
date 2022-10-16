import React from "react";

import {
    Button, 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from "@chakra-ui/react"

export default function CreateAgent(props) {
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <>
            <Button onClick={onOpen}>
                Create An Agent
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Agent parameters</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        lskdjflsdjfjdjslk
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}