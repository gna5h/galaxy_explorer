import { Flex, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import Search from "../../components/Search/Search.tsx";
import Content from "../../components/Content/Content.tsx";

export default function Home() {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Flex bg={"primary.black"} height="100vh">
      <Search isSmallScreen={isSmallScreen} />
      <Content isSmallScreen={isSmallScreen} />
    </Flex>
  );
}
