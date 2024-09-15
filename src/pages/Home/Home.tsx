import { Box, useBreakpointValue, VStack } from "@chakra-ui/react";
import React from "react";
import Search from "../../components/Search/Search.tsx";
import Content from "../../components/Content/Content.tsx";

export default function Home() {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg={"primary.black"} minHeight="100vh">
      <VStack>
        <Search isSmallScreen={isSmallScreen} />
        <Content isSmallScreen={isSmallScreen} />
      </VStack>
    </Box>
  );
}
