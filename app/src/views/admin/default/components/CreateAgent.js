import React, { useState } from "react";

import {
    Button, 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
} from "@chakra-ui/react"

import Dropzone from "views/admin/default/components/Dropzone";

import {useSetRecoilState} from "recoil";
import {agentsAtom} from "views/admin/atoms";

import Nft1 from "assets/img/nfts/Nft1.png";

export default function CreateAgent(props) {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const setAgents = useSetRecoilState(agentsAtom);

    let [agentName, setAgentName] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(agentName);

        const newAgent = {
            name: agentName,
            status: "Training",
            usage : "0",
            description: "",
            image: Nft1,
        };

        setAgents((oldAgents) => [...oldAgents, newAgent]);
        onClose() 
    }

    return (
        <>
            <Button onClick={onOpen}>
                Create An Agent
            </Button>
            <Modal size="xl" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Agent parameters</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Agent Name</FormLabel>
                            <Input type='name' value={agentName} onChange={(e)=>{setAgentName(e.target.value)}} />
                            <FormLabel>Training Files</FormLabel>
                            <Dropzone/>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onSubmit}>
                        Submit
                        </Button>
                        <Button variant='danger'>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}