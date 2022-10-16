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
import Banner from "views/admin/default/components/Banner";
import TableAgentStatus from "views/admin/default/components/TableAgentStatus";
import HistoryItem from "views/admin/default/components/HistoryItem";
import NFT from "components/card/NFT";
import Agent from "components/card/Agent";
import Card from "components/card/Card.js";
import CreateAgent from "views/admin/default/components/CreateAgent";
import Agents from "views/admin/default/components/Agents";


// Assets
import tableDataAgentStatus from "views/admin/default/variables/tableDataAgentStatus.json";
import { tableColumnsAgentStatus } from "views/admin/default/variables/tableColumnsAgentStatus";

import {RecoilRoot} from "recoil";

export default function Marketplace() {
  // Chakra Color Mode
  return (
    <RecoilRoot>
      <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
        {/* Main Fields */}
        <Grid
          mb='20px'
          gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
          gap={{ base: "20px", xl: "20px" }}
          display={{ base: "block", xl: "grid" }}>
          <Flex
            flexDirection='column'
            gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}>
            {/* <Banner /> */}
            <CreateAgent />
            <Agents/>
          </Flex>
          <Flex
            flexDirection='column'
            gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}>
            <Card px='0px' mb='20px'>
              <TableAgentStatus
                tableData={tableDataAgentStatus}
                columnsData={tableColumnsAgentStatus}
              />
            </Card>
          </Flex>
        </Grid>
        {/* Delete Product */}
      </Box>
    </RecoilRoot>
  );
}
