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
import Nft1 from "assets/img/nfts/Nft1.png";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft3 from "assets/img/nfts/Nft3.png";
import Nft4 from "assets/img/nfts/Nft4.png";
import Nft5 from "assets/img/nfts/Nft5.png";
import Nft6 from "assets/img/nfts/Nft6.png";
import Avatar1 from "assets/img/avatars/avatar1.png";
import Avatar2 from "assets/img/avatars/avatar2.png";
import Avatar3 from "assets/img/avatars/avatar3.png";
import Avatar4 from "assets/img/avatars/avatar4.png";
import tableDataAgentStatus from "views/admin/default/variables/tableDataAgentStatus.json";
import { tableColumnsAgentStatus } from "views/admin/default/variables/tableColumnsAgentStatus";

import {RecoilRoot, useRecoilValue} from "recoil";
import {agentsAtom} from "views/admin/atoms";

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
