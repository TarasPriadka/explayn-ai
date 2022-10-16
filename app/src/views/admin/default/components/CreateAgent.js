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
    Select,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
} from "@chakra-ui/react"

import Dropzone from "views/admin/default/components/Dropzone";

import {useSetRecoilState} from "recoil";
import {agentsAtom} from "views/admin/atoms";

import Nft1 from "assets/img/nfts/Nft1.png";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft3 from "assets/img/nfts/Nft3.png";
import Nft4 from "assets/img/nfts/Nft4.png";
import Nft5 from "assets/img/nfts/Nft5.png";
import Nft6 from "assets/img/nfts/Nft6.png";

const images = [Nft1, Nft2, Nft3, Nft4,Nft5, Nft6];

export default function CreateAgent(props) {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const setAgents = useSetRecoilState(agentsAtom);

    let [agentName, setAgentName] = useState("");
    let [agentDescription, setAgentDescription] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(agentName);
        const randomImage =  images[Math.floor(Math.random() * images.length)];
        const newAgent = {
            name: agentName,
            status: "Training",
            usage : "0",
            description: agentDescription,
            image: randomImage,
        };

        setAgents((oldAgents) => [...oldAgents, newAgent]);
        onClose() 
    }

    return (
        <>
            <Button onClick={onOpen} backgroundColor="var(--chakra-colors-green-400)">
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
                            <FormLabel>Agent Description</FormLabel>
                            <Input type='name' value={agentDescription} onChange={(e)=>{setAgentDescription(e.target.value)}} />
                            <FormLabel>Training Files</FormLabel>
                            <Dropzone/>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onSubmit}>
                        Submit
                        </Button>
                        <Button variant='danger' onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}