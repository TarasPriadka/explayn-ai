import React from "react";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { Logo, ButtonRight } from "components/icons/Icons";

import { HSeparator } from "components/separator/Separator";
import logo from './logo.png';

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("#084982", "#084982");

  return (
    <Flex align='center' direction='column'>
      <img width={"60px"} src={logo} alt="Logo" style={{"float":"left"}}/>
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
