import React from "react";
import { Flex, HStack, SimpleGrid } from "@chakra-ui/react";
import CharacterCard from "../CharacterCard/CharacterCard.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";

export default function Content({
  isSmallScreen,
}: {
  isSmallScreen: boolean | undefined;
}) {
  const { people } = useSelector((state: RootState) => state.people);

  return (
    <Flex width={"100%"} paddingX={50}>
      <HStack width={"100%"} justifyContent={"center"}>
        <SimpleGrid columns={isSmallScreen ? 1 : 2} spacing={10}>
          {people.map((character) => (
            <CharacterCard character={character} />
          ))}
        </SimpleGrid>
      </HStack>
    </Flex>
  );
}
