import { Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import CharacterCard from "../CharacterCard/CharacterCard.tsx";

export default function Content({
  isSmallScreen,
}: {
  isSmallScreen: boolean | undefined;
}) {
  return (
    <Flex width={"100%"} padding={50}>
      <SimpleGrid columns={isSmallScreen ? 1 : 4} spacing={10}>
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </SimpleGrid>
    </Flex>
  );
}
