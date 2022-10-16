
// Chakra imports
import {
  AvatarGroup,
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Link,
  Text,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
// Assets
import React, { useState } from "react";
import { IoCloseCircleSharp, IoCloseCircleOutline } from "react-icons/io5";

import {useSetRecoilState} from "recoil";
import {agentsAtom} from "views/admin/atoms";

export default function NFT(props) {
  const { image, name, description, api} = props;
  const [like, setLike] = useState(false);
  const textColor = useColorModeValue("navy.700", "white");
  const textColorBid = useColorModeValue("brand.500", "white");
  const initialFocusRef = React.useRef()

  const setAgents = useSetRecoilState(agentsAtom);

  return (
    <Card p='10px'>
      <Flex direction={{ base: "column" }} justify='center'>
        <Box mb={{ base: "20px", "2xl": "20px" }} position='relative'>
          <Image
            src={image}
            w={{ base: "100%", "3xl": "100%" }}
            h={{ base: "100%", "3xl": "100%" }}
            borderRadius='20px'
          />
          <Button
            position='absolute'
            bg='white'
            _hover={{ bg: "whiteAlpha.900" }}
            _active={{ bg: "white" }}
            _focus={{ bg: "white" }}
            p='0px !important'
            top='14px'
            right='14px'
            borderRadius='50%'
            minW='36px'
            h='36px'
            onClick={() => {
              setLike(!like);
              setAgents((oldAgents) => [...oldAgents].filter(agent => agent.name!=name));
            }}>
            <Icon
              transition='0.2s linear'
              w='20px'
              h='20px'
              as={like ? IoCloseCircleSharp : IoCloseCircleSharp}
              color='brand.500'
            />
          </Button>
        </Box>
        <Flex flexDirection='column' justify='center' alignContent="space-between" h='100%'>
          <Flex
            justify='center'
            direction={{
              base: "row",
              md: "column",
              lg: "row",
              xl: "column",
              "2xl": "row",
            }}
            mb='auto'>
            <Flex direction='column'>
              <Text
                color={textColor}
                fontSize={{
                  base: "xl",
                  md: "lg",
                  lg: "lg",
                  xl: "lg",
                  "2xl": "md",
                  "3xl": "lg",
                }}
                mb='5px'
                fontWeight='bold'
                me='14px'>
                {name}
              </Text>
              <Text
                color='secondaryGray.600'
                fontSize={{
                  base: "sm",
                }}
                fontWeight='400'
                me='14px'>
                {description}
              </Text>
            </Flex>
          </Flex>
          <Flex
            direction={{
              base: "row",
              md: "column",
              lg: "row",
              xl: "column",
              "2xl": "row",
            }}
            mt='25px'>
              <Popover
              >
                <PopoverTrigger>
                  <Button
                    variant='darkBrand'
                    color='white'
                    fontSize='sm'
                    fontWeight='500'
                    borderRadius='70px'
                    px='24px'
                    py='5px'
                    // position="absolute"
                    // bottom="0px"
                    margin="10px"
                    >
                      Details
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverHeader pt={4} fontWeight='bold' border='0'>
                    Details 
                  </PopoverHeader>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverBody>
                    {`API Secret: ${api}`}
                    <br />
                    {`API endpoint: explayn.ai/call/TOKEN`}
                  </PopoverBody>
                </PopoverContent>
              </Popover>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
