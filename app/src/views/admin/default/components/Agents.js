import React from "react";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

// Custom components
import Agent from "components/card/Agent";

// Assets

import {useRecoilValue} from "recoil";
import {agentsAtom} from "views/admin/atoms";

export default function Marketplace() {
  // Chakra Color Mode
  const agents = useRecoilValue(agentsAtom);

  const textColor = useColorModeValue("secondaryGray.900", "white");
  return (
   
    <Flex direction='column'>
    <Flex
        mt='45px'
        mb='20px'
        justifyContent='space-between'
        direction={{ base: "column", md: "row" }}
        align={{ base: "start", md: "center" }}>
        <Text color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
        Agents 
        </Text>
    </Flex>
    <SimpleGrid columns={{ base: 1, md: 3 }} gap='20px'>
        {agents.map((agent) => {
        return (
            <Agent 
            key={agent.name}
            name={agent.name}
            description={agent.description}
            image={agent.image}
            />
        );
        })}
    </SimpleGrid>
    </Flex>
  );
}
