import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Search from "../../components/Search/Search.tsx";

export default function Home() {
  return (
    <Flex bg={"primary.black"} height="100vh">
      <Search />
    </Flex>
  );
}
